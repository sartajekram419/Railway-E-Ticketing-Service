const express = require("express")
const bobyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql")
const bcrypt = require('bcrypt')
const salt = '$2b$10$9LVBYTgOZfXNqU7Bgs4b3O'

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "railway_management_database",
});

app.use(cors());
app.use(express.json())
app.use(bobyParser.urlencoded({ extended: true }))

app.post("/api/registerPassenger", (req, res) => {

    const name = req.body.name
    const nid = req.body.nid
    const encryptedNid = bcrypt.hashSync(nid, salt)
    const email = req.body.email
    const mobile = req.body.mobile
    const password = req.body.password
    const encryptedPassword = bcrypt.hashSync(password, salt)

    const sqlInsertPassenger = "INSERT INTO passenger (name, nid, email, mobile, password) VALUES (?,?,?,?,?)"
    db.query(sqlInsertPassenger, [name, encryptedNid, email, mobile, encryptedPassword], (err) => {
        if (err == null) {
            var user = {
                isValid: true,
                nid: encryptedNid,
            };
        } else {
            var user = {
                isValid: false,
            };
        }
        return res.json(user);
    });

});

app.post("/api/loginPassenger", (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const encryptedPassword = bcrypt.hashSync(password, salt)
    
    const sqlSelectPassenger = "SELECT * FROM passenger WHERE email = ? AND password = ?"
    db.query(sqlSelectPassenger, [email, encryptedPassword], (err, result) => {

        if (result.length == 1) {
            var user = {
                isValid: true,
                nid: result[0].NID,
                email: result[0].Email,
                name: result[0].Name,
                mobile: result[0].Mobile,
                password: result[0].Password,
            };
        } else {
            var user = {
                isValid: false,
            };
        }

        return res.json(user);
    });

});

app.post("/api/getPassengerJourneys", (req, res) => {

    const nid = req.body.nid

    const sqlSelectPassenger = "SELECT Ticket_ID, Train_ID, Coach_ID, No_of_seats, Start_position, End_position, Journey_time, Issue_time FROM ticket WHERE  Passenger_ID = ?"
    db.query(sqlSelectPassenger, [nid], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getTrainName", (req, res) => {

    const trainID = req.body.trainID

    const sqlSelectPassenger = "SELECT Name FROM train WHERE Train_ID = ?"
    db.query(sqlSelectPassenger, [trainID], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getStationID", (req, res) => {

    const trainID = req.body.trainID
    const position = req.body.position

    const sqlSelectPassenger = "SELECT Station_ID FROM train_station WHERE Train_ID = ? AND Position = ?"
    db.query(sqlSelectPassenger, [trainID, position], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getStationName", (req, res) => {

    const stationID = req.body.stationID

    const sqlSelectPassenger = "SELECT Name FROM station WHERE Station_ID = ?"
    db.query(sqlSelectPassenger, [stationID], (err, result) => {
        return res.json(result);
    });

});


app.post("/api/loginAdmin", (req, res) => {

    const id = req.body.id
    const password = req.body.password

    const sqlSelectPassenger = "SELECT * FROM admin WHERE ID = ? AND password = ?"
    db.query(sqlSelectPassenger, [id, password], (err, result) => {

        if (result.length == 1) {
            var admin = {
                isValid: true,
                id: result[0].ID,
            };
        } else {
            var admin = {
                isValid: false,
            };
        }

        return res.json(admin);
    });

});

app.post("/api/verifyTicket", (req, res) => {

    var ticketID = req.body.ticketID
    var mobileNo = req.body.mobileNo
    var passengerID = 0

    var sqlSelectPassenger = "SELECT Passenger_ID FROM ticket WHERE Ticket_ID = ?"
    db.query(sqlSelectPassenger, [ticketID], (err, result) => {
        if (result.length == 1) {
            passengerID = result[0].Passenger_ID
   
            const sqlCommand = "SELECT Mobile FROM passenger WHERE NID = ?"
            db.query(sqlCommand, [passengerID], (err1, result1) => {
                if (result1[0].Mobile == mobileNo) {
                    var isValid = {
                        isValid: true,
                    };
                } else {
                    var isValid = {
                        isValid: false,
                    };
                }
                return res.json(isValid);
            });


        } else {
            var isValid = {
                isValid: false,
            };
            return res.json(isValid);
        }

    });

});


app.post("/api/getStationList", (req, res) => {

    const sqlSelectPassenger = "SELECT Name FROM station"
    db.query(sqlSelectPassenger, [], (err, result) => {

        return res.json(result);
    });

});

app.post("/api/getStationIDForFindCard", (req, res) => {

    const stationName = req.body.stationName

    const sqlSelectPassenger = "SELECT Station_ID FROM station WHERE Name = ?"
    db.query(sqlSelectPassenger, [stationName], (err, result) => {
        return res.json(result);
    });

});


app.post("/api/getTrainIDFromPositionToPositionList", (req, res) => {

    const fromStationID = req.body.fromStationID
    const toStationID = req.body.toStationID

    const sqlSelectPassenger = "SELECT ts1.Train_ID as trainID, ts1.Position as fromStationPosition, ts2.Position as toStationPosition FROM train_station ts1, train_station ts2 WHERE  ts1.Station_ID = ? AND ts2.Station_ID = ? AND ts1.Train_ID = ts2.Train_ID"
    db.query(sqlSelectPassenger, [fromStationID, toStationID], (err, result) => {
        return res.json(result);
    });

});


app.post("/api/getStationNameFromTrainIDAndPosition", (req, res) => {

    const trainID = req.body.trainID
    const position = req.body.position

    const sqlSelectPassenger = "SELECT Name FROM station WHERE Station_ID = (SELECT Station_ID FROM train_station WHERE Train_ID = ? AND Position = ?)"
    db.query(sqlSelectPassenger, [trainID, position], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getUpTime", (req, res) => {

    const trainID = req.body.trainID
    const position = req.body.position

    const sqlSelectPassenger = "SELECT Up_time FROM train_station WHERE Train_ID = ? AND Position = ?"
    db.query(sqlSelectPassenger, [trainID, position], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getDownTime", (req, res) => {

    const trainID = req.body.trainID
    const position = req.body.position

    const sqlSelectPassenger = "SELECT Down_time FROM train_station WHERE Train_ID = ? AND Position = ?"
    db.query(sqlSelectPassenger, [trainID, position], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getCoachesCount", (req, res) => {

    const trainID = req.body.trainID

    const sqlSelectPassenger = "SELECT No_of_coaches FROM train WHERE Train_ID = ?"
    db.query(sqlSelectPassenger, [trainID], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getStation", (req, res) => {

    const sqlSelectStation = "SELECT Name, District FROM station "
    db.query(sqlSelectStation, (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getSeatCount", (req, res) => {

    const trainID = req.body.trainID
    const coachID = req.body.coachID

    const sqlSelectStation = "SELECT No_of_seats, Class_ID FROM train_coach WHERE Train_ID=? AND Coach_ID=?"
    db.query(sqlSelectStation, [trainID, coachID], (err, result) => {
        return res.json(result);
    });

});

app.post("/api/getSeatStatus", (req, res) => {

    const trainID = req.body.trainID
    const coachID = req.body.coachID
    const fromPosition = req.body.fromPosition
    const toPosition = req.body.toPosition
    const date = req.body.date
    const seatID = req.body.seatID

    
    const sqlInsertPassenger = "SELECT * FROM booking_status WHERE Train_ID=? AND Coach_ID=? AND Start_position=? AND End_position=? AND Seat_no=? AND Date=?"
    db.query(sqlInsertPassenger, [trainID, coachID, fromPosition, toPosition, seatID, date], (err, result) => {

        if (result.length == 1) {
            var object = {
                isAvailable: false,
            };
            return res.json(object);
        } else {
            var object = {
                isAvailable: true,
            };

            return res.json(object);
        }

    });

});

app.post("/api/addNewStation", (req, res) => {

    const station_name = req.body.station_name
    const station_district = req.body.station_district

    const sqlInsertStation = "Insert into station (Name, District) Values (?, ?)";
    db.query(sqlInsertStation, [station_name, station_district], (err) => {


        if (err == null) {
            var isValid = { isValid: true };
        } else {
            var isValid = { isValid: false };
        }
        return res.json(isValid);
    });
});


app.post("/api/deleteStation", (req, res) => {

    const station_name = req.body.station_name

    const sqlDeleteStation = "Delete from station Where Name =?";
    db.query(sqlDeleteStation, [station_name], (err) => {

        if (err == null) {
            var isValid = { isValid: true };
        } else {
            var isValid = { isValid: false };
        }
        return res.json(isValid);
    });
});

app.post("/api/findClerk", (req, res) => {

    const clerk_ID = req.body.clerk_ID

    const sqlFindClerk = "SELECT * FROM booking_clerk WHERE Clerk_ID =?"
    db.query(sqlFindClerk, [clerk_ID], (err, result) => {


        if (result.length == 1) {
            var clerk = {
                isValid: true,
                id: result[0].Clerk_ID,
                name: result[0].Name,
                mobile: result[0].Mobile,
                stationID: result[0].Station_ID,
            }
        }
        else {
            var clerk = {
                isValid: false,
            };
        }
        return res.json(clerk);
    });
});

app.post("/api/deleteClerk", (req, res) => {

    const clerk_ID = req.body.clerk_ID

    const sqlDeleteClerk = "Delete from booking_clerk Where Clerk_ID =?";

    db.query(sqlDeleteClerk, [clerk_ID], (err) => {


        if (err == null) {
            var isValid = { isValid: true };
        } else {
            var isValid = { isValid: false };
        }
        return res.json(isValid);
    });
});


app.post("/api/addNewClerk", (req, res) => {

    const clerkName = req.body.clerkName
    const clerkMobile = req.body.clerkMobile
    const clerkPassword = req.body.clerkPassword
    const selectedStationName = req.body.selectedStationName


    const sqlInsertStation = "SELECT Station_ID FROM station WHERE Name=?";
    db.query(sqlInsertStation, [selectedStationName], (err1, result1) => {

        const selectedStationID = result1[0].Station_ID;
        const sqlCommand = "Insert into booking_clerk (Name, Mobile, Password, Station_ID) Values (?, ?, ?, ?)"

        db.query(sqlCommand, [clerkName, clerkMobile, clerkPassword, selectedStationID], (err) => {
            if (err == null) {
                var isValid = { isValid: true };
            } else {

                var isValid = { isValid: false };
            }
            return res.json(isValid);


        });
    });
});



app.post("/api/addNewTrain", (req, res) => {

    const trainName = req.body.trainName
    const noOfCoaches = req.body.noOfCoaches
    const noOfClasses = req.body.noOfClasses

    const sqlInsertPassenger = "INSERT INTO train (Name, No_of_coaches, No_of_classes) VALUES (?,?,?)"
    db.query(sqlInsertPassenger, [trainName, noOfCoaches, noOfClasses], (err) => {
        if (err == null) {
            var isValid = { isValid: true };
        } else {

            var isValid = { isValid: false };
        }
        return res.json(isValid);

    });

});


app.post("/api/addTicket", (req, res) => {

    const issueTime = '2021-11-07 11:15:30'
    const journeyTime = req.body.journeyTime
    const startPositon = req.body.startPositon
    const endPosition = req.body.endPosition
    const trainID = req.body.trainID
    const classID = req.body.classID
    const coachID = req.body.coachID
    const noOfSeats = req.body.noOfSeats
    const fare = req.body.fare
    const passengerID = req.body.passengerID
    //console.log(passengerID);

    const sqlInsertPassenger = "INSERT INTO ticket (Issue_time, Journey_time, Start_position, End_position, Train_ID, Class_ID, Coach_ID, No_of_seats, Fare, Passenger_ID) VALUES (?,?,?,?,?,?,?,?,?,?)"
    db.query(sqlInsertPassenger, [issueTime, journeyTime, startPositon, endPosition, trainID, classID, coachID, noOfSeats, fare, passengerID], (err) => {
        //console.log(err);
        if (err == null) {

            const sqlCommand = "SELECT Ticket_ID FROM ticket WHERE Issue_time=? AND Journey_time=? AND Start_position=? AND End_position=? AND Train_ID=? AND Class_ID=? AND Coach_ID=? AND No_of_seats=? AND Fare=? AND Passenger_ID=?"
            db.query(sqlCommand, [issueTime, journeyTime, startPositon, endPosition, trainID, classID, coachID, noOfSeats, fare, passengerID], (err1, result1) => {
                
                return res.json(result1);
            });

        } else {
            var insertedTicketID = { insertedTicketID: -1 };

            return res.json(insertedTicketID.insertedTicketID);
        }

    });

});

app.post("/api/addTicketSeat", (req, res) => {

    const ticketID = req.body.ticketID
    const seatID = req.body.seatID

    const sqlInsertPassenger = "INSERT INTO ticket_seat (Ticket_ID, Seat_ID) VALUES (?,?)"
    db.query(sqlInsertPassenger, [ticketID, seatID], (err) => {
        if (err == null) {
            return res.json(true);
        } else {

        }

    });

});

app.post("/api/addBookingStatus", (req, res) => {


    const objectList = req.body.objectList

    for(let i=0; i<objectList.length; i++) {
        const trainID = objectList[i].trainID
        const coachID = objectList[i].coachID
        const date = objectList[i].date
        const startPositon = objectList[i].startPositon
        const endPosition = objectList[i].endPosition
        const seatNo = objectList[i].seatNo


        const sqlInsertPassenger = "INSERT INTO booking_status (Train_ID, Coach_ID, Date, Start_position, End_position, Seat_no) VALUES (?,?,?,?,?,?)"
        db.query(sqlInsertPassenger, [trainID, coachID, date, startPositon, endPosition, seatNo], (err) => {
            if (err == null) {

            } else {

            }

        });
    }

    return res.json(true);

});

app.post("/api/loginClerk", (req, res) => {

    const id = req.body.id
    const password = req.body.password

    const sqlSelectPassenger = "SELECT * FROM booking_clerk WHERE Clerk_ID = ? AND Password = ?"
    db.query(sqlSelectPassenger, [id, password], (err, result) => {

        if (result.length == 1) {
            var clerk = {
                isValid: true,
                id: result[0].Clerk_ID,
            };
        } else {
            var clerk = {
                isValid: false,
            };
        }

        return res.json(clerk);
    });

});

app.post("/api/addNewTrainCoach", (req, res) => {

    const trainName = req.body.trainName
    const coachID = req.body.coachID
    const classID = req.body.classID
    const noOfSeats = req.body.noOfSeats
    
    const sqlInsertPassenger = "SELECT Train_ID FROM train WHERE Name=?"
    db.query(sqlInsertPassenger, [trainName], (err, result) => {
        const trainID = result[0].Train_ID;

        const sqlCommand = "INSERT INTO train_coach (Train_ID, Coach_ID, Class_ID, No_of_seats) VALUES (?,?,?,?)"
        db.query(sqlCommand, [trainID, coachID, classID, noOfSeats], (err1) => {
            return res.json(true);
        });
    
    });

});

app.post("/api/addTrainStation", (req, res) => {

    const trainName = req.body.trainName
    const selectedStationName = req.body.selectedStationName
    const selectedUpTime = req.body.selectedUpTime
    const selectedDownTime = req.body.selectedDownTime
    const position = req.body.position



    const sqlSelectTrainID = "SELECT Train_ID FROM train WHERE Name = ?"
    db.query(sqlSelectTrainID, [trainName], (err, result) => {
        const trainID = result[0].Train_ID

        const sqlSelectStationID = "SELECT Station_ID FROM station WHERE Name=?"
        db.query(sqlSelectStationID, [selectedStationName], (err1, result1) => {
            const stationID = result1[0].Station_ID

            const sqlInsertTrainStation = "INSERT INTO train_station (Train_ID, Station_ID, Up_time, Down_time, Position) VALUES (?,?,?,?,?)"
            db.query(sqlInsertTrainStation, [trainID, stationID, selectedUpTime, selectedDownTime, position], (err1) => {
                return res.json(true);
            });
        });

    });

});

app.post("/api/setPassengerNid", (req, res) => {

    const passengerMail = req.body.passengerMail

    const sqlSelectStation = "SELECT NID FROM passenger WHERE Email=?"
    db.query(sqlSelectStation, [passengerMail], (err, result) => {
        console.log(result);
        return res.json(result);
    });

});

app.listen(3001, () => {
    console.log("running");
})



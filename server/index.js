const express = require("express")
const bobyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql")

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
    const email = req.body.email
    const mobile = req.body.mobile
    const password = req.body.password

    const sqlInsertPassenger = "INSERT INTO passenger (name, nid, email, mobile, password) VALUES (?,?,?,?,?)"
    db.query(sqlInsertPassenger, [name, nid, email, mobile, password], (err) => {
        if (err == null) {
            var isValid = { isValid: 'true' };
        } else {
            var isValid = { isValid: 'false' };
        }
        return res.json(isValid.isValid);
    });

});

app.post("/api/loginPassenger", (req, res) => {

    const email = req.body.email
    const password = req.body.password

    const sqlSelectPassenger = "SELECT * FROM passenger WHERE email = ? AND password = ?"
    db.query(sqlSelectPassenger, [email, password], (err, result) => {

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
            //console.log(passengerID);

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
        //console.log(result);
        return res.json(result);
    });

});


app.listen(3001, () => {
    console.log("running");
})












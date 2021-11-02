CREATE DATABASE `railway_management_database`;

CREATE TABLE railway_management_database.passenger (
  NID VARCHAR(500) NOT NULL,
  Email VARCHAR(50) NOT NULL unique,
  Name VARCHAR(50) NOT NULL,
  Mobile INT NOT NULL,
  Password VARCHAR(500) NOT NULL,
  PRIMARY KEY (NID));

CREATE TABLE `railway_management_database`.`station` (
  `Station_ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NOT NULL unique,
  `District` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`Station_ID`));
  

CREATE TABLE `railway_management_database`.`admin` (
  `ID` INT NOT NULL,
  `Password` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`ID`));

CREATE TABLE `railway_management_database`.`train` (
  `Train_ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NOT NULL,
  `No_of_coaches` INT NOT NULL,
  `No_of_classes` INT NOT NULL,
  PRIMARY KEY (`Train_ID`));

CREATE TABLE `railway_management_database`.`booking_clerk` (
  `Clerk_ID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NOT NULL,
  `Mobile` INT NOT NULL,
  `Password` VARCHAR(50) NOT NULL,
  `Station_ID` INT NOT NULL,
  PRIMARY KEY (`Clerk_ID`),
  FOREIGN KEY (Station_ID) REFERENCES station(Station_ID));


CREATE TABLE `railway_management_database`.`train_coach` (
  `Train_ID` INT NOT NULL,
  `Coach_ID` INT NOT NULL,
  `Class_ID` INT NOT NULL,
  `No_of_seats`INT NOT NULL,
  PRIMARY KEY (`Train_ID`, `Coach_ID`),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE);


CREATE TABLE `railway_management_database`.`train_station` (
  `Train_ID` INT NOT NULL,
  `Station_ID` INT NOT NULL,
  `Up_time` VARCHAR(50) NOT NULL,
  `Down_time` VARCHAR(50) NOT NULL,
  `Position` INT NOT NULL,
  PRIMARY KEY (`Train_ID`, `Station_ID`),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE,
  FOREIGN KEY (Station_ID) REFERENCES station(Station_ID) ON DELETE CASCADE);


CREATE TABLE `railway_management_database`.`fare` (
  `Train_ID` INT NOT NULL,
  `Class_ID` INT NOT NULL,
  `Start_position` INT NOT NULL,
  `End_position` INT NOT NULL,
  `Fare` INT NOT NULL,
  PRIMARY KEY (`Train_ID`, `Class_ID`, `Start_position`, `End_position`),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE
  -- FOREIGN KEY (Start_position) REFERENCES train_station(Position) ON DELETE CASCADE,
  -- FOREIGN KEY (End_position) REFERENCES train_station(Position) ON DELETE CASCADE
  );

CREATE TABLE `railway_management_database`.`booking_status` (
  `Train_ID` INT NOT NULL,
  `Coach_ID` INT NOT NULL,
  `Date` VARCHAR(50) NOT NULL,
  `Start_position` INT NOT NULL,
  `End_position` INT NOT NULL,
  `Seat_no` INT NOT NULL,
  PRIMARY KEY (`Train_ID`, `Coach_ID`, `Date`, `Start_position`, `End_position`, `Seat_no`),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE
  -- FOREIGN KEY (Start_position) REFERENCES train_station(Position) ON DELETE CASCADE,
  -- FOREIGN KEY (End_position) REFERENCES train_station(Position) ON DELETE CASCADE
  );



CREATE TABLE `railway_management_database`.`ticket` (
  `Ticket_ID` INT NOT NULL AUTO_INCREMENT,
  `Issue_time` DATETIME NOT NULL,
  `Journey_time` VARCHAR(50) NOT NULL,
  `Start_position` INT NOT NULL,
  `End_position` INT NOT NULL,
  `Train_ID` INT NOT NULL,
  `Class_ID` INT NOT NULL,
  `Coach_ID` INT NOT NULL,
  `No_of_seats` INT NOT NULL,
  `Fare` INT NOT NULL,
  `Passenger_ID` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`Ticket_ID`),
  FOREIGN KEY (Passenger_ID) REFERENCES passenger(NID),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE
  -- FOREIGN KEY (Start_position) REFERENCES fare(Start_position) ON DELETE CASCADE,
  -- FOREIGN KEY (End_position) REFERENCES fare(End_position) ON DELETE CASCADE
  );


CREATE TABLE `railway_management_database`.`ticket_seat` (
  `Ticket_ID` INT NOT NULL,
  `Seat_ID` INT NOT NULL,
  PRIMARY KEY (`Ticket_ID`, `Seat_ID`),
  FOREIGN KEY (Ticket_ID) REFERENCES ticket(Ticket_ID)
  );


INSERT INTO `railway_management_database`.admin (ID, Password)
VALUES (1, 'admin');

-- INSERT INTO `railway_management_database`.passenger 
-- VALUES (1, 'p1@gmail.com', 'Passenger 1', 1521370630, '1'), (2, 'p2@gmail.com', 'Passenger 2', 1720658277, '1'), (3, 'p3@gmail.com', 'Passenger 3', 1924563623, '1');

-- INSERT INTO `railway_management_database`.station (Name, District)
-- VALUES ('Chittagong Railway Station', 'Chittagong'), ('Cumilla Railway Station', 'Cumilla'), ('Komolapur Railway Station', 'Dhaka');

-- INSERT INTO `railway_management_database`.train (Name, No_of_coaches, No_of_classes)
-- VALUES ('Suborno Express', 3, 2), ('Turna Express', 3, 2);

-- INSERT INTO `railway_management_database`.booking_clerk (Name, Mobile, Password, Station_ID)
-- VALUES ('Clerk 1', 1934562345, '1', 2);

-- INSERT INTO `railway_management_database`.train_coach 
-- VALUES (1, 1, 1, 12),
-- (1, 2, 2, 14),
-- (1, 3, 2, 16),
-- (2, 1, 1, 8),
-- (2, 2, 2, 16),
-- (2, 3, 2, 24);


-- INSERT INTO `railway_management_database`.train_station (Train_ID, Station_ID, Up_time, Down_time, Position)
-- VALUES (1, 1, '07:00:00', '21:00:00', 1), 
-- (1, 2, '09:00:00', '19:00:00', 2),
-- (1, 3, '13:00:00', '15:00:00', 3),
-- (2, 1, '00:00:00', '14:00:00', 1), 
-- (2, 2, '02:00:00', '12:00:00', 2),
-- (2, 3, '06:00:00', '08:00:00', 3);


-- INSERT INTO `railway_management_database`.fare (Train_ID, Class_ID, Start_position, End_position, Fare)
-- VALUES (1, 1, 1, 2, 400),
-- (1, 1, 2, 3, 600),
-- (1, 1, 1, 3, 1000),
-- (1, 2, 1, 2, 200),
-- (1, 2, 2, 3, 400),
-- (1, 2, 1, 3, 600),

-- (2, 1, 1, 2, 300),
-- (2, 1, 2, 3, 500),
-- (2, 1, 1, 3, 800),
-- (2, 2, 1, 2, 100),
-- (2, 2, 2, 3, 300),
-- (2, 2, 1, 3, 400);


-- INSERT INTO `railway_management_database`.booking_status (Train_ID, Coach_ID, Date, Start_position, End_position, Seat_no)
-- VALUES (1, 1, '2021-10-17', 1, 3, 1),
-- (1, 1, '2021-10-17', 1, 3, 2),
-- (1, 2, '2021-10-17', 1, 3, 2),
-- (1, 3, '2021-10-17', 1, 3, 4),
-- (2, 1, '2021-10-17', 1, 3, 4),
-- (2, 1, '2021-10-17', 1, 3, 1),
-- (2, 1, '2021-10-17', 1, 3, 5),
-- (2, 2, '2021-10-17', 1, 3, 2),
-- (2, 3, '2021-10-17', 1, 3, 4);

-- INSERT INTO `railway_management_database`.booking_status (Train_ID, Coach_ID, Date, Start_position, End_position, Seat_no) VALUES (2, 2, '2021-10-16', 11, 13, 2);

-- INSERT INTO `railway_management_database`.ticket (Issue_time, Journey_time, Start_position, End_position, Train_ID, Class_ID, Coach_ID, No_of_seats, Fare, Passenger_ID)
-- VALUES ('2021-10-17 05:40:30', '2021-10-17 07:00:00', 1, 2, 1, 1, 1, 2, 800, 1), 
-- ('2021-10-17 05:40:30', '2021-10-17 09:00:00', 2, 3, 1, 2, 2, 1, 400, 2),

-- ('2021-10-17 12:20:35', '2021-10-17 08:00:00', 3, 2, 2, 1, 1, 1, 500, 3),
-- ('2021-10-17 12:20:35', '2021-10-17 00:00:00', 1, 3, 2, 2, 2, 1, 400, 1);


-- INSERT INTO `railway_management_database`.ticket_seat 
-- VALUES (1, 1), (1, 2),
-- (2, 2), 
-- (3, 4),
-- (4, 2);






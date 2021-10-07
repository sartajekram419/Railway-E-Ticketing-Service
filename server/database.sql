CREATE DATABASE `railway_management_database`;

CREATE TABLE railway_management_database.passenger (
  NID INT NOT NULL,
  Email VARCHAR(50) NOT NULL unique,
  Name VARCHAR(50) NOT NULL,
  Mobile INT NOT NULL,
  Password VARCHAR(50) NOT NULL,
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
  `Up_start_time` TIME NOT NULL,
  `Down_start_time` TIME NOT NULL,
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
  `Up_time` TIME NOT NULL,
  `Down_time` TIME NOT NULL,
  `Position` INT NOT NULL unique,
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
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE,
  FOREIGN KEY (Start_position) REFERENCES train_station(Position) ON DELETE CASCADE,
  FOREIGN KEY (End_position) REFERENCES train_station(Position) ON DELETE CASCADE
  );

CREATE TABLE `railway_management_database`.`booking_status` (
  `Train_ID` INT NOT NULL,
  `Coach_ID` INT NOT NULL,
  `Date` DATETIME NOT NULL,
  `Start_position` INT NOT NULL,
  `End_position` INT NOT NULL,
  `Seat_no` INT NOT NULL,
  `Status` INT NOT NULL,
  PRIMARY KEY (`Train_ID`, `Coach_ID`, `Date`, `Start_position`, `End_position`, `Seat_no`),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE,
  FOREIGN KEY (Start_position) REFERENCES train_station(Position) ON DELETE CASCADE,
  FOREIGN KEY (End_position) REFERENCES train_station(Position) ON DELETE CASCADE
  );



CREATE TABLE `railway_management_database`.`ticket` (
  `Ticket_ID` INT NOT NULL AUTO_INCREMENT,
  `Issue_time` DATETIME NOT NULL,
  `Journey_time` DATETIME NOT NULL,
  `Start_position` INT NOT NULL,
  `End_position` INT NOT NULL,
  `Train_ID` INT NOT NULL,
  `Class_ID` INT NOT NULL,
  `Coach_ID` INT NOT NULL,
  `No_of_seats` INT NOT NULL,
  `Fare` INT NOT NULL,
  `Passenger_ID` INT NOT NULL,
  PRIMARY KEY (`Ticket_ID`),
  FOREIGN KEY (Passenger_ID) REFERENCES passenger(NID),
  FOREIGN KEY (Train_ID) REFERENCES train(Train_ID) ON DELETE CASCADE,
  FOREIGN KEY (Start_position) REFERENCES fare(Start_position) ON DELETE CASCADE,
  FOREIGN KEY (End_position) REFERENCES fare(End_position) ON DELETE CASCADE
  );


CREATE TABLE `railway_management_database`.`ticket_seat` (
  `Ticket_ID` INT NOT NULL,
  `Seat_ID` INT NOT NULL,
  PRIMARY KEY (`Ticket_ID`, `Seat_ID`),
  FOREIGN KEY (Ticket_ID) REFERENCES ticket(Ticket_ID)
  );


INSERT INTO `railway_management_database`.admin (ID, Password)
VALUES (1, 'admin');

INSERT INTO `railway_management_database`.passenger 
VALUES (1, '1', '1', 1, '1'), (2, '2', '2', 2, '2'), (3, '3', '3', 3, '3');

INSERT INTO `railway_management_database`.station (Name, District)
VALUES ('Ctg', 'Ctg'), ('Dhaka', 'Dhaka'), ('Cumilla', 'Cumilla');

INSERT INTO `railway_management_database`.train (Name, Up_start_time, Down_start_time, No_of_coaches, No_of_classes)
VALUES ('Suborno', '07:00:00', '15:00:00', 21, 3), ('Turna', '23:00:00', '07:00:00', 15, 2);

INSERT INTO `railway_management_database`.booking_clerk (Name, Mobile, Password, Station_ID)
VALUES ('Ami Clerk', '0123435123', '1234', 2);

INSERT INTO `railway_management_database`.train_coach 
VALUES (1, 5, 2, 52);

INSERT INTO `railway_management_database`.train_station 
VALUES (1, 3, '10:00:00', '18:00:00', 1), (1, 2, '13:00:00', '19:00:00', 2);

INSERT INTO `railway_management_database`.fare 
VALUES (1, 3, 1, 2, 480);

INSERT INTO `railway_management_database`.booking_status 
VALUES (1, 5, '2021-10-07', 1, 2, 45, 1);

INSERT INTO `railway_management_database`.ticket (Issue_time, Journey_time, Start_position, End_position, Train_ID, Class_ID, Coach_ID, No_of_seats, Fare, Passenger_ID)
VALUES ('2021-10-04 05:40:30', '2021-10-07 07:00:00', 1, 2, 1, 3, 5, 45, 480, 1);

INSERT INTO `railway_management_database`.ticket_seat 
VALUES (1, 45);



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



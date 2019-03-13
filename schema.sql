DROP DATABASE IF EXISTS siamese;
CREATE DATABASE siamese;
USE siamese;

CREATE TABLE users (
 userId INTEGER AUTO_INCREMENT NOT NULL,
 name VARCHAR( 255) NOT NULL,
 email VARCHAR( 255 ) NOT NULL,
 password VARCHAR(255) NOT NULL,
 createdDate DATETIME NOT NULL,
 PRIMARY KEY (userId ) 
);

CREATE TABLE  workOutTypes(
   workOutId INTEGER AUTO_INCREMENT NOT NULL,
   name VARCHAR(255) NOT NULL,
   caloriesPerHour INTEGER NOT NULL,
   PRIMARY KEY ( workOutId )
);

CREATE TABLE workOutChallenge(
   challengeId INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
   name VARCHAR(255) NOT NULL,
   goal INTEGER NOT NULL,
   challengeDuration INTEGER NOT NULL,
   createdate DATETIME
);

CREATE TABLE workOutLog(
	 logId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
	 workOutDate DATE NOT NULL,
    workOutId INTEGER NOT NULL,
   
    FOREIGN KEY (workOutID)
    REFERENCES workOutTypes(workOutId)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
   
    workOutDuration INTEGER NOT NULL,
    userid INTEGER NOT NULL, 
   
    FOREIGN KEY (userId)
    REFERENCES users(userId)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
   
    challengeId INTEGER NOT NULL,
   
    FOREIGN KEY (challengeId)
    REFERENCES workOutChallenge(challengeId)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
   
    createdDate DATETIME NOT NULL
);


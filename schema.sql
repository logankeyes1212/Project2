<<<<<<< HEAD
DROP DATABASE IF EXISTS siamese;
CREATE DATABASE siamese;
USE siamese;

=======
ROP DATABASE IF EXISTS siamese;
CREATE DATABASE siamese;
USE siamese;
>>>>>>> 84861e52ca752e25f6679a3dc3d5e71de04239cd
CREATE TABLE users (
 userId INTEGER AUTO_INCREMENT NOT NULL,
 name VARCHAR( 255) NOT NULL,
 email VARCHAR( 255 ) NOT NULL,
 password VARCHAR(255) NOT NULL,
 createdDate DATETIME NOT NULL,
<<<<<<< HEAD
 city VARCHAR(255) NOT NULL,
 state VARCHAR(255) NOT NULL,
  PRIMARY KEY (userId ) 
);


=======
  PRIMARY KEY (userId ) 
);
>>>>>>> 84861e52ca752e25f6679a3dc3d5e71de04239cd
CREATE TABLE  workOutTypes(
   workOutId INTEGER AUTO_INCREMENT NOT NULL,
   name VARCHAR(255) NOT NULL,
   caloriesPerHour INTEGER NOT NULL,
    PRIMARY KEY ( workOutId )
);
<<<<<<< HEAD



=======
>>>>>>> 84861e52ca752e25f6679a3dc3d5e71de04239cd
CREATE TABLE workOutChallenge(
   challengeId INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
   name VARCHAR(255) NOT NULL,
   goal INTEGER NOT NULL,
   challengeDuration INTEGER NOT NULL,
<<<<<<< HEAD
   createdate DATE
);
CREATE TABLE workOutLog(
	logId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
=======
   createdate DATETIME
);
CREATE TABLE workOutLog(
    logId INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
>>>>>>> 84861e52ca752e25f6679a3dc3d5e71de04239cd
   workOutDate DATE NOT NULL,
   workOutId INTEGER NOT NULL,
   workOutDuration INTEGER NOT NULL,
   userid INTEGER NOT NULL, 
   challengeId INTEGER NOT NULL,
   createdDate DATETIME NOT NULL,
    
   FOREIGN KEY (workOutID)
   REFERENCES workOutTypes(workOutId)
  ON UPDATE CASCADE
ON DELETE RESTRICT,
    
FOREIGN KEY (challengeId)
     REFERENCES workOutChallenge(challengeId)
    ON UPDATE CASCADE
   ON DELETE RESTRICT,
     
     FOREIGN KEY (userId)
    REFERENCES users(userId)
   ON UPDATE CASCADE
   ON DELETE RESTRICT
<<<<<<< HEAD
);

=======
);
>>>>>>> 84861e52ca752e25f6679a3dc3d5e71de04239cd

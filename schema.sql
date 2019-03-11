CREATE DATABASE siamese;
USE siamese;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `name` VARCHAR( 255) NOT NULL,
  `email` VARCHAR( 255 ) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdDate` DATETIME NOT NULL,
  PRIMARY KEY ( `id` ) 
);


CREATE TABLE   `workOutTypes`(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `caloriesPerHour` INTEGER NOT NULL,
    PRIMARY KEY ( `id` )
);

CREATE TABLE `workOutLog`(
    `id` INTEGER AUTO_INCREMENT NOT NULL,
    `workOutDate` DATETIME NOT NULL,
    `workOutTypeID` INTEGER NOT NULL,
    `workOutDuration` INTEGER NOT NULL,
    `userid` INTEGER NOT NULL,
    `challengeId` INTEGER NOT NULL,
    `createdDate` DATETIME NOT NULL, 
    FOREIGN KEY fk_workOutTypes(workOutTypeID)
    REFERENCES workOutTypes(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
    FOREIGN KEY fk_workoutChallenge(workOutChallengeID)
    REFERENCES workOutChallengeID(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT,
    FOREIGN KEY fk_users(userid)
    REFERENCES users(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
);


CREATE TABLE workOutChallenge(
    `id` INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL
    `name` VARCHAR(255) NOT NULL,
    `goal` INTEGER NOT NULL,
    `challengeDuration` INTEGER NOT NULL,
    `createdate` DATETIME
)


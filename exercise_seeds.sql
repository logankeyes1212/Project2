INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Calisthenics", 300);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Circuit Training: General", 710);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Cycling: Moderate (12-14mph)", 686);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Gardening", 343);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Hand Shoveling Snow", 514);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Hiking: Moderate", 514);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("House Cleaning: General", 257);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Jogging", 532);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Mowing the Lawn", 472);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Running (11min/mile)", 772);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stair Step Machine", 772);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Bike: Moderate", 472);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Bike: Moderate", 600);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Bike: Vigorous", 900);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Rowing: Moderate", 300);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Rowing: Moderate", 600);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stationary Rowing: Vigorous", 729);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Stretching/Yoga", 214);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Swimming(Freestyle): Moderate", 686);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Walking: Brisk", 326);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Weight Lifting: Moderate", 257);
INSERT INTO workOutTypes (name, caloriesPerHour) VALUES ("Weight Lifting: Vigorous", 514);


INSERT INTO users (name, email, password) VALUES ("logan","logan@logan.com","logan")


INSERT INTO workOutLog(workOutDate, workOutDuration, createdDate) VALUES (2011-11-11, 30, now );

INSERT INTO workOutChallenge (name, goal, challengeDuration, createdDate) VALUES ("Challenge one", "goal", 30, now)

CREATE TABLE workOutLog(
   logId INTEGER AUTO_INCREMENT NOT NULL,
   workOutDate DATE NOT NULL,
   workOutID INTEGER NOT NULL,
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
    
    FOREIGN KEY (userid)
    REFERENCES users(usersId)
    ON UPDATE CASCADE
    ON DELETE RESTRI


CREATE TABLE workOutChallenge(
   challengeid INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
   name VARCHAR(255) NOT NULL,
   goal INTEGER NOT NULL,
   challengeDuration INTEGER NOT NULL,
   createdate DATETIME
)
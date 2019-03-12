module.exports = function(sequelize, DataTypes) {
    var workOutChallenge = sequelize.define("workOutChallenge", {
      // The email cannot be null, and must be a proper email before creation
      challengeID: { 
        type: DataTypes.INTEGER,
        allowNull: false,
         primaryKey: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      goal: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      challengeDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return workOutChallenge;
}
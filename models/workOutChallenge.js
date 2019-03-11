module.exports = function(sequelize, DataTypes) {
    var workOutChallenge = sequelize.define("workOutTypes", {
      // The email cannot be null, and must be a proper email before creation
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
}
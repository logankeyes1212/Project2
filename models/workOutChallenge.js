module.exports = function(sequelize, DataTypes) {
    var workOutChallenge = sequelize.define("workOutChallenge", {
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
      },
    });
    workOutChallenge.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      workOutChallenge.hasMany(models.workOutLog, {
        onDelete: "RESTRICT"
      });
    };
    return workOutChallenge;
}
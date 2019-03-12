module.exports = function(sequelize, DataTypes) {
    var workOutTypes = sequelize.define("workOutTypes", {
      // The email cannot be null, and must be a proper email before creation
      workOutID: { 
        type: DataTypes.INTEGER,
        allowNull: false,
         primaryKey: true
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      caloriesPerHour: {
        type: DataTypes.INTEGER,
      },
    });

    workOutTypes.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        workOutTypes.hasMany(models.workOutLog, {
          onDelete: "RESTRICT"
        });
        workOutTypes.hasMany(models.workOutChallenge, {
          onDelete: "RESTRICT"
        });
      };
      

      return workOutTypes;
    
}
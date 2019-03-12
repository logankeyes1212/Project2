module.exports = function(sequelize, DataTypes) {
    var workOutLog = sequelize.define("workOutLog", {
      // The email cannot be null, and must be a proper email before creation
    //   createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    // sequilize will do this below
    //   },
    //   workOutTypes.id: {
    //  sequilize will do this below
    // } 
     WorkOutDate: {
            type: DataTypes.DATE,
            allowNull: false,
             },
      

      workOutDuration: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      caloriesPerHour: {
        type: DataTypes.INTEGER,
      },
    });


    workOutLog.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        workOutLog.belongsTo(models.user, {
          foreignKey: {
            key:id,
            allowNull: false
          }
        });
      };

      workOutLog.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        workOutLog.belongsTo(models.workOutTypes, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      workOutLog.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        workOutLog.belongsTo(models.workOutChallenge, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    
      return workOutLog;
}
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bodyparts = sequelize.define('Bodyparts', {
    name: DataTypes.STRING
  }, {});
  Bodyparts.associate = function(models) {
    // associations can be defined here
  };
  return Bodyparts;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Piece = sequelize.define('Piece', {
    name: DataTypes.STRING,
    bodypartId: DataTypes.INTEGER,
    materials: DataTypes.STRING,
    weather: DataTypes.STRING,
    work: DataTypes.BOOLEAN
  }, {});
  Piece.associate = function(models) {
    // associations can be defined here
  };
  return Piece;
};
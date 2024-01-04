'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JefersonCaminhoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JefersonCaminhoes.init({
    nome: DataTypes.STRING,
    ano: DataTypes.STRING,
    possessor: DataTypes.STRING,
    tipoDeCarga: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'JefersonCaminhoes',
  });
  return JefersonCaminhoes;
};
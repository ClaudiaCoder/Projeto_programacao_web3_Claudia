'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    id: DataTypes.UUID,
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    collor: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
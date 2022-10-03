const { DataTypes } = require("sequelize")
const sequelize = require("../infra/dbsequelize");

const CarModel = sequelize.define("CarModel", {
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:new Date()
    },
    
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    collor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    licensePlate:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    
    },
 {
    createdAt: false, 
    updatedAt: false,
     tableName: "Cars",
     schema: "public"

 }
);

module.exports = CarModel;



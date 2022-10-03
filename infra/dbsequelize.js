const { Sequelize, DatabaseError, Op } = require("sequelize");   
const {USERNAME, PASSWORD, DATABASE, HOST, DIALECT,PORT_DB } = require("dotenv").config().parsed;


// exemplo 1 de conexão
// const sequelize = new Sequelize(
//         `${DIALECT}://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${DATABASE}`
//         )
    

// exemplo 2 de conexão
const sequelize = new Sequelize({
        dialect: DIALECT,
        database: DATABASE,
        host: HOST,
        username: USERNAME,
        password: PASSWORD,
        port: PORT_DB,
        define: {
          timestamps: false,
        }
      });

    sequelize
     .authenticate()
     .then( () => {console.log('Connection has been established successfully.')} )
     .catch( () => {console.error('Unable to connect to the database:')} )
    
    module.exports = sequelize;
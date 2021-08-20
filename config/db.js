//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> mamp
let database = 'huellitas'
let userMYSQL = 'root'
let passMySQL = 'root'
let hostMySQL = 'localhost'



const db = new Sequelize(database, userMYSQL, passMySQL, {
  host: hostMySQL,
  dialect: 'mysql',
  define: {
        //desactivamos el timestamp, para que no envie fechas de actualizaciones a la db
        //https://sequelize.org/v5/manual/models-definition.html
        //https://sequelize.org/v5/manual/models-definition.html#configuration
        timestamps: false,
    }
})

module.exports = db;
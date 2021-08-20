//Conexion MySQL
const Sequelize = require('sequelize')

//conexion local -> mamp
// let database = 'huellitas'
// let userMYSQL = 'root'
// let passMySQL = 'root'
// let hostMySQL = 'localhost'

//conexion a Heroku
let database = 'heroku_90bd1279f362a05'
let userMYSQL = 'b6c6cb672951a0'
let passMySQL = '2cc0e7c7'
let hostMySQL = 'eu-cdbr-west-01.cleardb.com'

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
let express = require('express');
const Sequelize = require('sequelize')
let router = express.Router();

//Importar inkHTML
// let printDNI = require('ink-html');

//Conexion MYSQL
const db = require('../config/db')

// Data a pasar
// let title = "datos de tu mascota"
// let placeholderNac = "Nacimiento"


/* GET usuarios to render. */
router.get('/', function(req, res, next) {

  res.render('usuarios.hbs')

});


module.exports = router;

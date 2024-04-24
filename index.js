const express = require('express')



/* ********************************************* */
/* *********************************** CONSTANTS */
const app = express()
const PORT = 3000



/* ********************************************* */
/* *********************************** FUNCTIONS */
const log_port_msg = function(req, res, next){
  console.log(`heard on port: ${PORT}`)
  }



/* ********************************************* */
/* ************************************* ROUTING */
app.listen(PORT, log_port_msg )
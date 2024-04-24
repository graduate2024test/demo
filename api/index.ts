const express = require("express");
const path = require('path');



/* ********************************************* */
/* *********************************** CONSTANTS */
const app = express();
const port = 3000;



/* ********************************************* */
/* *********************************** FUNCTIONS */



/* ********************************************* */
/* *********************************** METHODS   */
app.set('views', path.join(process.cwd(), `views`));
app.set('view engine', 'ejs');

app.use( express.static(path.join(process.cwd(), `public`)) );



/* ********************************************* */
/* *********************************** ROUTING   */
app.get("/", (req, res) => res.send("BACKSLASH"));

app.get("/map", (req, res) => res.render(`map.ejs`));

app.get("/room", (req, res) => res.render(`room.ejs`));

app.get("/timetable", (req, res) => res.render(`timetable.ejs`));

app.listen(port, () => console.log("LISTEN 3000."));

module.exports = app;
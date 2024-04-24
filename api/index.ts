const express = require("express");

/* ********************************************* */
/* *********************************** CONSTANTS */
const app = express();
const port = 3000;


/* ********************************************* */
/* *********************************** FUNCTIONS */

/* ********************************************* */
/* *********************************** ROUTING ***/
app.get("/", (req, res) => res.send("BACKSLASH"));

app.get("/map", (req, res) => res.render(`map.ejs`));

app.get("/room", (req, res) => res.render(`room.ejs`));

app.get("/timetable", (req, res) => res.render(`timetable.ejs`));

app.listen(port, () => console.log("LISTEN 3000."));

module.exports = app;
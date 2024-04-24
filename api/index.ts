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

app.get("/map", (req, res) => res.send("MAP"));

app.get("/room", (req, res) => res.send("ROOM"));

app.get("/timetable", (req, res) => res.send("TIMETABLE"));

app.listen(port, () => console.log("LISTEN 3000."));

module.exports = app;
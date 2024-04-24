const express = require("express");
const path = require('path');
const fs = require('fs');



/* ********************************************* */
/* *********************************** CONSTANTS */
const app = express();
const port = 3000;



/* ********************************************* */
/* *********************************** FUNCTIONS */
function get_ttable_ejs(req, res, next) {	  
	const ttable_path = path.join(process.cwd(), 'public', 'ttable.json')
    const ttable_list = JSON.parse(fs.readFileSync(ttable_path, 'utf8'))
    res.render(`ttable.ejs`,{ttable:ttable_list})  
  }
  
function get_room_list(room_id) {
	const room_path = path.join(process.cwd(), 'public', room_id);
    const room_list = JSON.parse(fs.readFileSync(room_path, 'utf8'));
	room_list.sort(
    (a, b) => {
      if (a.time < b.time) { return -1; }
      if (a.time > b.time) { return 1; }
      return 0; 
	  }
	)
	return room_list;
  }



/* ********************************************* */
/* *********************************** METHODS   */
app.set('views', path.join(process.cwd(), `views`));
app.set('view engine', 'ejs');

app.use( express.static(path.join(process.cwd(), `public`)) );



/* ********************************************* */
/* *********************************** ROUTING   */
app.get("/", (req, res) => res.render(`map.ejs`));

app.get("/map", (req, res) => res.render(`map.ejs`));

app.get("/room/r302", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r302.json')}));
app.get("/room/r303", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r303.json')}));
app.get("/room/r304", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r304.json')}));
app.get("/room/r310", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r310.json')}));
app.get("/room/r312", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r312.json')}));
app.get("/room/r313", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r313.json')}));
app.get("/room/r315", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r315.json')}));
app.get("/room/r319", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r319.json')}));
app.get("/room/r321", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r321.json')}));
app.get("/room/r322", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r322.json')}));
app.get("/room/r323", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r323.json')}));
app.get("/room/r328", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r328.json')}));
app.get("/room/r329", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r329.json')}));
app.get("/room/r330", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r330.json')}));
app.get("/room/r331", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r331.json')}));
app.get("/room/r333", (req, res) => res.render(`room.ejs`,{room_list:get_room_list('r333.json')}));

app.get("/timetable", get_ttable_ejs);

app.listen(port, () => console.log("LISTEN 3000."));

module.exports = app;
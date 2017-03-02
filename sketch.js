var bg;
var img;

function setup() {
  resizeCanvas(1000,1000);
  img = loadImage("assets/ISS.png")
  bg = loadImage("assets/background.jpg");
  setInterval(loadISS, 1000);
}

function loadISS() {
  loadJSON('http://api.open-notify.org/iss-now.json', gotISS);
}

function gotISS(data) {
  background(bg)
  
  var longitude = Number(data.iss_position.longitude);
  var latitude = Number(data.iss_position.latitude);
  
  
  var x = map(longitude, -180, 180, 0, 1000)
  var y = map(latitude, 90, -90, 0, 1000)
  
  image(img, x - 166.5, y - 75.5);
  
}
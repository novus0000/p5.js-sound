// ====================
// Ensure file format compatability by including multiple file extensions.
// MP3 and OGG are recommended.
// ====================

// create a variable for the sound file
var soundFile;


function setup() {
  createCanvas(400, 400);
  background(0);

  // set the extensions we have included
  soundFormats('mp3', 'ogg');

  // will load either betabox.mp3 or beatbox.ogg, depending on the browser
  soundFile = loadSound('../_files/beatbox');

}

// when a key is pressed...
function keyPressed() {

  // play the sound file
  soundFile.play(1,1);

  // also make the background yellow
  background(255, 255, 0);
}

function keyReleased() {
  // make the background black again when the key is released
  background(0);
}

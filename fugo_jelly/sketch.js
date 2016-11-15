var jellyVid;
var soundFile;
var song;
var reverb;
var img;

var firstPageTexts = [
  "In 1945, the Japanese needed to come up with a plan",
  "to attack America",
  "without sending over their men."
];
var secondPageTexts = [
  "so they came up with an intercontinental weapon-",
  "to use the jetstream above the Pacific ocean",
  "to send over Fu-go bombs to the West coast of America"
];

var thirdPageTexts = [
  "around 9,000 fu-gos were launched,",
  "only 1,000 actually reached the land",
  "and even less were documented as found"
];

var fourthPageTexts = [
  "Only one fu-go",
  "caused a casualty",
  "three children and their mother."
];

var fifthPageTexts = [
  "Most of them floated like jellyfish",
  "in the blue sky 30,000 feet",
  "above the sea,",
];

var sixthPageTexts = [
  "the river of wind",
  "rushing at 7,500 mph",
  "carrying jellyfish",
];

var page1 = new Page(firstPageTexts);
var page2 = new Page(secondPageTexts);
var page3 = new Page(thirdPageTexts);
var page4 = new Page(fourthPageTexts);
var page5 = new Page(fifthPageTexts);
var page6 = new Page(sixthPageTexts);

var ButtonPages = [];
var buttonPageCounter = 0;
var button1;
var currentPage;

var ButtonTexts = ['next', 'next', 'next', 'next', 'next', 'next', 'next'];
// var rightButtonTexts = ['dark', 'no', 'no', 'no', 'no', 'no', 'no', 'ok', 'next page'];
// var offset = 0;
// var easing = 0.05;

function preload() {
  soundFile = loadSound('wind.mp3');
  song = loadSound('new_philip.mp3');
  img = loadImage('fugo_down.jpg');
}

function setup() {
  song.play();
  song.loop();
  song.disconnect();
  
  soundFile.play();
  soundFile.setVolume(1.0);
  reverb = new p5.Reverb();
  reverb.process(song, 100, 40);
  soundFile.disconnect();
  reverb.process(soundFile, 50, 20);

  createCanvas(800, 750);
  fill(200);
  background(img);
  frameRate(25);

  jellyVid = createVideo('large_jelly_new.mov');
  jellyVid.position(0, 150);
  jellyVid.loop();
  jellyVid.hide();


  ButtonPages = [page1, page2, page3, page4, page5, page6];
  currentPage = page1;
  currentPage.isPage = true;

  button1 = select('#myButton1');
  button1.mousePressed(newPage);
  button1.position(0, 680);
  myButton1.innerHTML = ButtonTexts[buttonPageCounter];

}

function draw() {
  currentPage.typeWriterText();
}


function newPage() {

  if (buttonPageCounter < ButtonPages.length - 1) {
    buttonPageCounter = buttonPageCounter + 1;
    currentPage = ButtonPages[buttonPageCounter];
    myButton1.innerHTML = ButtonTexts[buttonPageCounter];
      background(img, 200, 200);

  }
  if (currentPage == page6) {
    button1.hide();
    background(0);
    jellyVid.show();
  }
  
  // if (currentPage == page4){
  //   jellyVid.show();
  //   jellyVid.play()
  // }
  console.log(buttonPageCounter);
}

function Page(textArray) {
  this.textArray = textArray;
  this.counter = 0;
  this.eachLineCounter = 0;
  this.isPage = false;


  this.typeWriterText = function() {
    if (this.counter < this.textArray[this.eachLineCounter].length) {

      text(textArray[this.eachLineCounter][this.counter], 10 + (this.counter * 10), 40 + (40 * this.eachLineCounter), width, height);
      this.counter++;
    } else {
      if (this.eachLineCounter < this.textArray.length - 1) {
        this.eachLineCounter++;
        this.counter = 0;
      }
    }
  };
}


var time = new Date().getHours();
var wakeupTime = 7;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var noon = 12;
var evening = 18;

var updateClock = function() {

var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var message = document.getElementById('timeEvent');
var lolPic = document.getElementById('lolcat');

//setting message text//
if (time == wakeupTime) {
  messageText = "Rise and Shine!"
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
} else if (time == lunchTime) {
  messageText = "Lunch NOM NOM NOMZZ!"
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
} else if (time == partyTime) {
  messageText = "PARRTAYY!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
} else if (time == napTime) {
  messageText = "SleepyTimeZ";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
} else if (time > evening) {
  messageText = "Good evening!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
} else if (time < noon) {
  messageText = "Good morning!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
} else {
  messageText = "Good afternoon!";
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
}

message.innerText = messageText;
lolPic.src = image;


//create decrementing clock within the LOLCat pane//

var currentTime = new Date();
var hour = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var clock = document.getElementById('clock');
var meridian = "AM";




var seeClock = function() {

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = hour + " : " + minutes + " : " + seconds + " " + meridian;

  clock.innerText = clockTime;

};

seeClock();

};


var oneSecond = 1000;


setInterval(updateClock, oneSecond);

// set partytime button effects//

var partyButton = document.getElementById('partyTimeButton');

var ispartyTime = false;

var partyEvent = function() {

  if (ispartyTime == false) {

    ispartyTime = true;

    time = partyTime;

  } else if (ispartyTime == true) {

    ispartyTime = false;

    time = new Date().getHours();
  }
  }

partyButton.addEventListener('click', partyEvent);

//selection menu for times//

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = function() {

  wakeupTime = wakeUpTimeSelector.value;
}

var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var lunchEvent = function() {

  lunchTime = lunchTimeSelector.value;
}

var napTimeSelector = document.getElementById('napTimeSelector');

var napEvent = function () {
  napTime = napTimeSelector.value;
}

napTimeSelector.addEventListener('change', napEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);




// var wakeUpEvent = function() {
// 	wakeupTime = wakeUpTimeSelector.value;
// };
//
// var lunchEvent = function() {
// 	lunchTime = lunchTimeSelector.value;
// };
//
// var napEvent = function() {
// 	napTime = napTimeSelector.value;
// };
//
//
// partyTimeButton.addEventListener('click', partyEvent);
//
// wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
//
// lunchTimeSelector.addEventListener('change', lunchEvent);
//
// napTimeSelector.addEventListener('change', napEvent);

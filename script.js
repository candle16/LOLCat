
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

//set partytime button effects//
//set up selection menu so that can ?redefine variables?//












// var noon = 12;
// var evening = 18; // 6PM
// var wakeupTime = 9; // 9AM
// var lunchTime = 12; // 12PM
// var partyTime = 17; // 5PM
// var napTime = lunchTime + 2; // 2PM
// var time = new Date().getHours();
//
//
// var updateClock = function(){
//
// };
//
// var showCurrentTime = function() {
//      // display the string on the webpage
//      var clock = document.getElementById('clock');
//
//      var currentTime = new Date();
//      var hours = currentTime.getHours();
//      var minutes = currentTime.getMinutes();
//      var seconds = currentTime.getSeconds();
//      var meridian = "AM";
//
//      // Set Hours
//      if (hours >= noon){
//           meridian = "PM";
//      }
//
//      if (hours > noon){
//           hours = hours – 12;
//      }
//
//      // Set Minutes
//      if (minutes < 10){
//           minutes = "0" + minutes;
//      }
//
//      // Set Seconds
//      if (seconds < 10){
//           seconds = "0" + seconds;
//      }
//
//      // put together the string that displays the time
//      var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
//
//      clock.innerText = clockTime;
// };
//
// showCurrentTime();
// updateClock();
//
// var oneSecond = 1000;
//
// setInterval(updateClock, oneSecond);
//
// var partyTimeButton = document.getElementById("partyTimeButton");
// var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
// var lunchTimeSelector = document.getElementById("lunchTimeSelector");
// var napTimeSelector = document.getElementById("napTimeSelector");
//
// var isPartyTime = false;
//
// var partyEvent = function() {
//
//    if (isPartyTime === false) {
//       isPartyTime = true;
//       time = partyTime;
//       partyTimeButton.innerText = "PARTY TIME!";
//       partyTimeButton.style.backgroundColor = "#222";
//    } else {
//       isPartyTime = false;
//       time = new Date().getHours();
//       partyTimeButton.innerText = "PARTY OVER";
//       partyTimeButton.style.backgroundColor = "#0A8DAB";
//    }
// };
//
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

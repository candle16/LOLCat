
var time = new Date().getHours();
var wakeupTime = 7;
var lunchTime = 12;
var partyTime = 17;
var napTime = lunchTime + 2;
var noon = 12;
var evening = 18;

var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
var message = document.getElementById('timeEvent');

//setting message text//
if (time == wakeupTime) {
  messageText = "Rise and Shine!"
} else if (time == lunchTime) {
  messageText = "Lunch NOM NOM NOMZZ!"
} else if (time < noon) {
  messageText = "Good morning!";
} else if (time == partyTime) {
  messageText = "PARRTAYY!";
} else if (time == napTime) {
  messageText = "SleepyTimeZ";
} else if (time > evening) {
  messageText = "Good evening!";
} else {
  messageText = "Good afternoon!";
}

message.innerText = messageText;

//add lolcat pictures to each conditional time//
//create decrementing clock within the LOLCat pane//
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
//      var lolcat = document.getElementById('lolcat');
//      var message = document.getElementById('timeEvent');
//      var messageText;
//      var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//
//      if (time == partyTime){
//           image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
//           messageText = "IZ PARTEE TIME!!";
//      } else if (time == napTime) {
//           image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
//           messageText = "IZ NAP TIME…";
//      } else if (time == lunchTime) {
//           image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
//           messageText = "IZ NOM NOM NOM TIME!!";
//      } else if (time == wakeupTime) {
//           image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
//           messageText = "IZ TIME TO GETTUP.";
//      } else if (time < noon) {
//           messageText = "Good morning!";
// 		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//      } else if (time > evening) {
//           messageText = "Good Evening!";
// 		 	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//      }else {
//           messageText = "Good afternoon!";
// 		 	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
//      }
//
//      message.innerText = messageText;
//      lolcat.src = image;
//
//
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

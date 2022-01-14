var dateobj = document.getElementById("topdate")
var timehourobj = document.getElementById("time-hour")
var timedivobj = document.getElementById("time-divide")
var timeminobj = document.getElementById("time-min")
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')


var today = new Date()
var currentmonth = months[today.getMonth()]
var currentdate = String(today.getDate())
var currentyear = String(today.getFullYear())

var blink = true;
function setTime(){
    var now = new Date();
    var minutes = (now.getMinutes() < 10) ? `0${now.getMinutes()}` : now.getMinutes();
    //var seconds = (now.getUTCSeconds() < 10) ? `0${now.getUTCSeconds()}` : now.getUTCSeconds();
    timehourobj.innerHTML = `${now.getHours() % 12}`;
    timedivobj.innerHTML = blink ? ':' : '&nbsp'
    timeminobj.innerHTML = `${minutes}`;
    blink = !blink
}

dateobj.innerHTML = `${currentmonth} ${currentdate}, ${currentyear}`


window.setInterval(setTime, 500);


console.log()
DEST_TIME = "June 06, 2020 18:00:00"


// get the difference between right now and next monday    
var toTime = 0;
var time = 0;

var hoursToExtend = 2;

var myVar;

function updateBaseTime() {
    toTime = new Date(DEST_TIME);

    // set the time    
    //toTime.setHours(toTime.getHours() + hoursToExtend);
    //toTime.setMinutes(toTime.getMinutes() + 0);
    //toTime.setSeconds(toTime.getSeconds() + 1);

    //console.log('toTime : '+toTime + " now : "+time);

    setTimeout('updateTimeSpan()', 100);
}

function updateTimeSpan() {

    time = new Date();

    var milliSeconds;
    var seconds, minutes, hours;

    milliSeconds = toTime - time;

    //console.log('toTime : '+toTime + " now : "+time);

    var totalSecondsLeft = milliSeconds / 1000;

    // get hours    
    hours = parseInt(milliSeconds / (1000 * 60 * 60));
    milliSeconds -= (hours * 1000 * 60 * 60);

    // get minutes    
    minutes = parseInt(milliSeconds / (1000 * 60));
    milliSeconds -= (minutes * 1000 * 60);

    // get seconds    
    seconds = parseInt(milliSeconds / 1000);

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var hourSpan = document.getElementById('el_h1');
    hourSpan.innerHTML = hours;

    var secondSpan = document.getElementById('el_s1');
    secondSpan.innerHTML = seconds;

    var minuteSpan = document.getElementById('el_m1');
    minuteSpan.innerHTML = minutes;

    if (totalSecondsLeft < 1) {
        alert('Done!');
        clearTimeout(myVar);
        return;
    }

    myVar = setTimeout('updateTimeSpan()', 1000);
}

onload = updateBaseTime();

$(function() {

    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});
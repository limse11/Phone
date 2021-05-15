setTimeout(function load(){
    document.querySelector('#loading-screen').style.height = "0vh";
    document.querySelector('#loading-img').style.display = "none";
}, 3000);
function czas(){
    var czas = new Date();
    var godz = czas.getHours();
    var min = czas.getMinutes();
    if (min<10) {
        min = '0'+min;
    }
    var sek = czas.getSeconds();
    if (sek<10) {
        sek = '0'+sek;
    }
    var data = new Date();
    var dayName = new Array(7);
    dayName[0] = "SUN";
    dayName[1] = "MON";
    dayName[2] = "TUE";
    dayName[3] = "WED";
    dayName[4] = "THU";
    dayName[5] = "FRI";
    dayName[6] = "SAT";
    var nazwa = dayName[data.getDay()];
    var dzien = data.getDate();
    var mies = data.getMonth() + 1;
    document.querySelector('#clock-time').innerHTML = godz+':'+min+'<span id="clock-sec">'+sek+'</span>';
    document.querySelector('#clock-date').innerHTML = nazwa+' '+dzien+'/'+mies;
}
setInterval(czas, 1000);
var tabNum = 1;
function mailApp(){
    document.querySelector('#mail-app').style.display = "block";
}
function chromeApp(){
    document.querySelector('#chrome-app').style.display = "block";
}
function chromeAppExit(){
    document.querySelector('#chrome-app').style.display = "none";
    tabNum++;
    document.querySelector('#chrome-tabs').innerHTML = tabNum;
}
function mailAppExit(){
    document.querySelector('#mail-app').style.display = "none";
}
function settingsApp(){
    document.querySelector('#settings-app').style.display = "block";
}
function settingsAppExit(){
    document.querySelector('#settings-app').style.display = "none";
}
function playerApp(){
    document.querySelector('#player-app').style.display = "block";
}
function playerAppExit(){
    document.querySelector('#player-app').style.display = "none";
}
document.querySelector('#play-box-one').onmouseover = function (){
    document.querySelector('#play-box-one').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-one').style.height = "100px";
    document.querySelector('#play-box-one').onmouseout = function (){
        document.querySelector('#play-one').style.height = "0px";
        document.querySelector('#play-box-one').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-two').onmouseover = function (){
    document.querySelector('#play-box-two').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-two').style.height = "100px";
    document.querySelector('#play-box-two').onmouseout = function (){
        document.querySelector('#play-two').style.height = "0px";
        document.querySelector('#play-box-two').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-three').onmouseover = function (){
    document.querySelector('#play-box-three').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-three').style.height = "100px";
    document.querySelector('#play-box-three').onmouseout = function (){
        document.querySelector('#play-three').style.height = "0px";
        document.querySelector('#play-box-three').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-four').onmouseover = function (){
    document.querySelector('#play-box-four').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-four').style.height = "100px";
    document.querySelector('#play-box-four').onmouseout = function (){
        document.querySelector('#play-four').style.height = "0px";
        document.querySelector('#play-box-four').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-five').onmouseover = function (){
    document.querySelector('#play-box-five').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-five').style.height = "100px";
    document.querySelector('#play-box-five').onmouseout = function (){
        document.querySelector('#play-five').style.height = "0px";
        document.querySelector('#play-box-five').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-six').onmouseover = function (){
    document.querySelector('#play-box-six').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-six').style.height = "100px";
    document.querySelector('#play-box-six').onmouseout = function (){
        document.querySelector('#play-six').style.height = "0px";
        document.querySelector('#play-box-six').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-seven').onmouseover = function (){
    document.querySelector('#play-box-seven').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-seven').style.height = "100px";
    document.querySelector('#play-box-seven').onmouseout = function (){
        document.querySelector('#play-seven').style.height = "0px";
        document.querySelector('#play-box-seven').style.backgroundColor = "transparent";
    }
}
document.querySelector('#play-box-eight').onmouseover = function (){
    document.querySelector('#play-box-eight').style.backgroundColor = "rgb(25, 26, 31)";
    document.querySelector('#play-eight').style.height = "100px";
    document.querySelector('#play-box-eight').onmouseout = function (){
        document.querySelector('#play-eight').style.height = "0px";
        document.querySelector('#play-box-eight').style.backgroundColor = "transparent";
    }
}
var audioPlayer = document.querySelector('#player-audio');
function playOne(){
    audioPlayer.src = 'music/nocturne.mp3';
}
function playTwo(){
    audioPlayer.src = 'music/concerto.mp3';
}
function playThree(){
    audioPlayer.src = 'music/mountains.mp3';
}
function playFour(){
    audioPlayer.src = 'music/albinoni.mp3';
}
function playFive(){
    audioPlayer.src = 'music/variation.mp3';
}
function playSix(){
    audioPlayer.src = 'music/notime.mp3';
}
function playSeven(){
    audioPlayer.src = 'music/schubert.mp3';
}
function playEight(){
    audioPlayer.src = 'music/vivaldi.mp3';
}
function colorSettings(){
    document.body.style.backgroundColor = document.querySelector('#color-settings').value;
}
function urlSettings(){
    document.body.style.backgroundImage = "url('"+document.querySelector('#url-settings').value+"')";
}
function clockSettings(){
    document.querySelector('#clock-time').style.color = document.querySelector('#clock-settings').value;
    document.querySelector('#clock-date').style.color = document.querySelector('#clock-settings').value;
}
var passwordField = document.querySelector('#password');
function one(){
    passwordField.value = passwordField.value + '1';

}
function two(){
    passwordField.value = passwordField.value + '2';

}
function three(){
    passwordField.value = passwordField.value + '3';

}
function four(){
    passwordField.value = passwordField.value + '4';

}
function five(){
    passwordField.value = passwordField.value + '5';

}
function six(){
    passwordField.value = passwordField.value + '6';

}
function seven(){
    passwordField.value = passwordField.value + '7';

}
function eight(){
    passwordField.value = passwordField.value + '8';

}
function nine(){
    passwordField.value = passwordField.value + '9';

}
function zero(){
    passwordField.value = passwordField.value + '0';

}
var numberField = document.querySelector('#number-field');
function callOne(){
    numberField.value = numberField.value + '1';

}
function callTwo(){
    numberField.value = numberField.value + '2';

}
function callThree(){
    numberField.value = numberField.value + '3';

}
function callFour(){
    numberField.value = numberField.value + '4';

}
function callFive(){
    numberField.value = numberField.value + '5';

}
function callSix(){
    numberField.value = numberField.value + '6';

}
function callSeven(){
    numberField.value = numberField.value + '7';

}
function callEight(){
    numberField.value = numberField.value + '8';

}
function callNine(){
    numberField.value = numberField.value + '9';

}
function callZero(){
    numberField.value = numberField.value + '0';
}
var pinVer='4989';
function authentication(){
    if (passwordField.value === pinVer){
        document.querySelector('#lock-screen').style.display = 'none';
        document.querySelector('#main-lock-overlay').style.filter = 'none';
        passwordField.value = '';
    }
    else{
        passwordField.value = '';
        passwordField.placeholder = 'Wrong PIN';
    }
}
function clear(){
    passwordField.value = '';
}
function callClear(){
    numberField.value = '';
}
var callContent = document.querySelector('#calls-content');
function numberInput(){
    var number = document.createElement('DIV');
    callContent.appendChild(number);
    var numberText = document.createTextNode("+48 "+numberField.value);
    number.appendChild(numberText);
    numberField.value = "";
}
var messageField = document.querySelector('#messages-field');
var messageContent = document.querySelector('#messages-content');
function messageInput(){
    var message = document.createElement('DIV');
    messageContent.appendChild(message);
    var messageText = document.createTextNode(messageField.value);
    message.appendChild(messageText);
    messageField.value = "";
}
function callsAppExit(){
    document.querySelector('#calls-app').style.display = "none";
}
function callsApp(){
    document.querySelector('#calls-app').style.display = "block";
}
function messagesAppExit(){
    document.querySelector('#messages-app').style.display = "none";
}
function messagesApp(){
    document.querySelector('#messages-app').style.display = "block";
}
document.querySelector('#lock').onclick = function(){
    document.querySelector('#main-lock-overlay').style.filter = 'blur(20px)';
    document.querySelector('#lock-screen').style.display = 'block';
}
function pinSettings(){
    pinVer = document.querySelector('#pin-settings').value;
    document.querySelector('#pin-settings').value = '';
}
function firstSlide(){
    document.querySelector('#app-slider').style.left = '0%';
    document.querySelector('#app-slider-point-one').style.backgroundColor = '#fff';
    document.querySelector('#app-slider-point-two').style.backgroundColor = 'rgba(255, 255, 255, 0.384)';
}
function secondSlide(){
    document.querySelector('#app-slider').style.left = '-100%';
    document.querySelector('#app-slider-point-two').style.backgroundColor = '#fff';
    document.querySelector('#app-slider-point-one').style.backgroundColor = 'rgba(255, 255, 255, 0.384)';
}
function searchUrl(){
    var url = document.querySelector('#search-bar').value;
    document.querySelector('#chrome-content').data = url;
}
const onMouseMove = (e) =>{
    var appChange = e.pageX ;
    /*document.onclick = function(){
        total= 0;
        var currentLocation = parseInt(appChange, 10);
        document.querySelector('#password').placeholder = currentLocation;
        if (currentLocation > 1000) {
            swipeR = document.querySelector('#apps').style.left;
            var swipeRint = parseInt(swipeR, 10);
            total = swipeRint + rightR;
            document.querySelector('#password').placeholder = total;
            document.querySelector('#apps').style.left = total + '%';
        }
        if (currentLocation < 1000){
            swipeL = document.querySelector('#apps').style.left;
            var swipeLint = parseInt(swipeL, 10);
            total = swipeLint + leftL;
            document.querySelector('#password').placeholder = total;
            document.querySelector('#apps').style.left = total + '%';
        }
    }*/
    document.onclick = function(){
        var currentLocation = parseInt(appChange, 10);
        if (currentLocation > 1200) {
            firstSlide();
        }
        if (currentLocation < 740){
            secondSlide();
        }
    }
}
document.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37:
            firstSlide();
            break;
        case 39:
            secondSlide();
            break;
    }
};
document.addEventListener('mousemove', onMouseMove);
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
document.querySelector('#mail').onclick = function mailApp(){
    document.querySelector('#mail-app').style.display = "block";
}
document.querySelector('#chrome').onclick = function chromeApp(){
    document.querySelector('#chrome-app').style.display = "block";
}
document.querySelector('#chrome-home').onclick = function chromeAppExit(){
    document.querySelector('#chrome-app').style.display = "none";
    tabNum++;
    document.querySelector('#chrome-tabs').innerHTML = tabNum;
}
document.querySelector('#mail-home').onclick = function mailAppExit(){
    document.querySelector('#mail-app').style.display = "none";
}
document.querySelector('#settings').onclick = function settingsApp(){
    document.querySelector('#settings-app').style.display = "block";
}
document.querySelector('#settings-home').onclick = function settingsAppExit(){
    document.querySelector('#settings-app').style.display = "none";
}
document.querySelector('#player').onclick = function playerApp(){
    document.querySelector('#player-app').style.display = "block";
}
document.querySelector('#player-home').onclick = function playerAppExit(){
    document.querySelector('#player-app').style.display = "none";
}
document.querySelector('#player-home').onclick = function playerAppExit(){
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
document.querySelector('#play-one').onclick = function (){
    document.querySelector('#player-audio').src = 'music/Polyphia _ The Worst (Official Audio).mp3';
}
document.querySelector('#play-two').onclick = function (){
    document.querySelector('#player-audio').src = 'music/Interstellar OST 08 Mountains by Hans Zimmer.mp3';
}
document.querySelector('#play-three').onclick = function (){
    document.querySelector('#player-audio').src = 'music/03 Heart-Shaped Box.mp3';
}
document.querySelector('#play-four').onclick = function (){
    document.querySelector('#player-audio').src = 'music/10 - G.O.A.T..flac';
}
document.querySelector('#play-five').onclick = function (){
    document.querySelector('#player-audio').src = 'music/06 - Bittersweet.flac';
}
document.querySelector('#play-six').onclick = function (){
    document.querySelector('#player-audio').src = 'music/test.wav';
}
document.querySelector('#play-seven').onclick = function (){
    document.querySelector('#player-audio').src = 'music/test.wav';
}
document.querySelector('#play-eight').onclick = function (){
    document.querySelector('#player-audio').src = 'music/test.wav';
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
document.querySelector('#one').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '1';

}
document.querySelector('#two').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '2';

}
document.querySelector('#three').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '3';

}
document.querySelector('#four').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '4';

}
document.querySelector('#five').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '5';

}
document.querySelector('#six').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '6';

}
document.querySelector('#seven').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '7';

}
document.querySelector('#eight').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '8';

}
document.querySelector('#nine').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '9';

}
document.querySelector('#zero').onclick = function(){
    document.querySelector('#password').value = document.querySelector('#password').value + '0';

}
function callOne(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '1';

}
function callTwo(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '2';

}
function callThree(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '3';

}
function callFour(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '4';

}
function callFive(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '5';

}
function callSix(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '6';

}
function callSeven(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '7';

}
function callEight(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '8';

}
function callNine(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '9';

}
function callZero(){
    document.querySelector('#number-field').value = document.querySelector('#number-field').value + '0';

}
var pinVer='4989';
document.querySelector('#ok').onclick = function(){
    if (document.querySelector('#password').value === pinVer){
        document.querySelector('#lock-screen').style.display = 'none';
        document.querySelector('#main-lock-overlay').style.filter = 'none';
        document.querySelector('#password').value = '';
    }
    else{
        document.querySelector('#password').value = '';
        document.querySelector('#password').placeholder = 'Wrong PIN';
    }
}
document.querySelector('#clear').onclick = function(){
    document.querySelector('#password').value = '';
}
function callClear(){
    document.querySelector('#number-field').value = '';
}
function numberInput(){
    document.querySelector('#number-field').value = '';
}
function callsAppExit(){
    document.querySelector('#calls-app').style.display = "none";
}
function callsApp(){
    document.querySelector('#calls-app').style.display = "block";
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
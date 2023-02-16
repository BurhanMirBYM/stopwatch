let tens = 0;
let seconds = 0;

let appendTens = document.querySelector('#tens');
let appendSeconds = document.querySelector('#seconds');

let startbtn = document.querySelector('#button-start');
let stopbtn = document.querySelector('#button-stop');
let resetbtn = document.querySelector('#button-reset');

let interval;

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens
    }

    if(tens > 9){
        appendTens.innerHTML = tens
    }

    if(tens > 99){
        seconds++
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + tens
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
}

startbtn.addEventListener('click', function(){
    interval = setInterval(startTimer, 10)
});

stopbtn.addEventListener('click', function(){
    clearTimeout(interval)
})

resetbtn.addEventListener('click', function(){
    clearTimeout(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds
    appendTens.innerHTML = tens
})


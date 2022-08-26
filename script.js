const timer = document.querySelector('.header__timer-extra')
timer.innerHTML = 0

function time(){
    if(timer.innerHTML <= 50){
        time50()
    } else if(timer.innerHTML >= 50 && timer.innerHTML < 80){
        time80()
    } else if (timer.innerHTML >= 80 && timer.innerHTML < 100){
        time100()
    // } else {
    //     timer.innerHTML = 0
    //     time50()
    }
}
time()

function time50(){
    timer.innerHTML++
    setTimeout(() => time(), 100)
}

function time80(){
    timer.innerHTML++
    setTimeout(() => time(), 250)
}

function time100(){
    timer.innerHTML++
    setTimeout(() => time(), 500)
}

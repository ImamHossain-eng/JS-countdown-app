const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYear = '1 Jan 2021'

function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date()
    //find out difference
    const diff = (newYearDate - currentDate)
    //second calculation
    const totalSeconds = diff / 1000
    //days calculation
    const days = Math.floor(totalSeconds / 3600 / 24)
    //hours remaining after considering day
    const hours = Math.floor(totalSeconds / 3600) % 24
    //minutes remaining 
    const minutes = Math.floor(totalSeconds / 60) % 60
    //secondss remaining 
    const seconds = Math.floor(totalSeconds) % 60

   // console.log(days, hours, minutes, seconds)
    //Display results to DOM
    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds)

}
//Format timer
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown()

setInterval(countdown, 1000)




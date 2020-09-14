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
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    console.log(days, hours, minutes, seconds)
    
}

countdown()

setInterval(countdown, 1000)




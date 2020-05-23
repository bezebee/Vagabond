
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand1]')
const minuteHand = document.querySelector('[data-minute-hand1]')
const secondHand = document.querySelector('[data-second-hand1]')

function setClock(){
    
    const currentDate = new Date()/*Current timezone*/

    
    
    const secondsRatio = currentDate.getSeconds() /60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()




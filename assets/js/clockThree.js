setInterval(setClock, 1000)

const hourHand3 = document.querySelector('[data-hour-hand3]')
const minuteHand3 = document.querySelector('[data-minute-hand3]')
const secondHand3 = document.querySelector('[data-second-hand3]')

function setClock(){
    
    const currentDate = new Date(new Date().getTime() - 3600*1000*8) /*Timezone -6hrs*/

    const secondsRatio = currentDate.getSeconds() /60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12

    setRotation(secondHand3, secondsRatio)
    setRotation(minuteHand3, minutesRatio)
    setRotation(hourHand3, hoursRatio)


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


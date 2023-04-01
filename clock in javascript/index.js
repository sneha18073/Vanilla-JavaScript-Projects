console.log("Clock using javascript");

const secondsHand = document.querySelector('.secondshand');
const minutesHand = document.querySelector('.minutehand');
const hoursHand = document.querySelector(".hourhand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60)*360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`

    const hours = now.getHours();
    const hoursDegree = ((hours/60)*360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`
}

setInterval(setDate, 1000);
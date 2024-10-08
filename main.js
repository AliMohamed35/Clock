const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90; // say 60 / 60 = 1 * 360  = 360 degrees, we added 90 to offset it 0 by default like we did in css
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutes);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hours);
}

setInterval(setDate, 1000);
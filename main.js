let time = document.querySelector('.time');
let countDown = document.querySelector('.count-down');
let inputChange = document.querySelector('input');
let setAlarm = document.querySelector('.set-alarm');
let stopAlarm = document.querySelector('.stop-alarm');
let userInput = '';
let alarmTimeout = '';
let timeToAlarm ='';

let audio = new Audio('alarm.wav');
audio.loop = true;

const displayTime = () => {
   now = new Date();
   const hours = fixZero(now.getHours());
   const minutes = fixZero(now.getMinutes());
   const seconds = fixZero(now.getSeconds());
   time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(displayTime, 1000);

const fixZero = (now) => {
    if(now < 10 ) {
        return '0' + now;
    }
    return now;
}
    inputChange.addEventListener('change', (e) => {
        userInput = new Date(e.target.value).getTime();
    })
    setAlarm.addEventListener('click', () => {
        if(userInput) {
            const name = () => {
                now = new Date().getTime();
                timeToAlarm = userInput - now;
                  if(now < userInput) {
                    alarmTimeout = setTimeout(() => audio.play(), timeToAlarm);
                    chronometer()
                  }
          }
          setInterval(name, 1000)
            }
        
    })

stopAlarm.addEventListener('click', () => {
    audio.pause();
    countDown.innerHTML = '00 : 00 : 00';
    if(alarmTimeout) {
        clearTimeout(alarmTimeout)
    }
});

   let chronometer = () => {
        let second = Math.floor(timeToAlarm / 1000);
        let minute = Math.floor(second / 60);
        let hour = Math.floor(minute / 60);
       
        hour %= 24;
        minute %= 60;
        second %= 60;
       
       
        hour = (hour < 10) ? '0' + hour : hour;
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;
          countDown.innerHTML = `${hour} : ${minute} : ${second}`
    
  }
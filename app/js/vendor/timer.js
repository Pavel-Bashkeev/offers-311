const timer =  document.querySelector('.stock-timer__inner'),
  minutes = timer.querySelector('.timer-minuts'),
  seconds = timer.querySelector('.timer-second');

  let time = 900;
  const startCount = setInterval(startTimer, 1000);

function startTimer(){
  let minutsTime = Math.floor(time / 60);
  let secondTime = Math.floor(time % 60);

  minutes.textContent = minutsTime < 10 ? '0'+ minutsTime : minutsTime;
  seconds.textContent = secondTime < 10 ? '0' + secondTime : secondTime;
  
  time == 0 ? clearInterval(startCount):time--; 
}
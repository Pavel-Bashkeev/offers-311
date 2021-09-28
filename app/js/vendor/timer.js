const timer = document.querySelector('.stock-timer__inner');
const timerOrder = document.querySelector('.order-timer');
if(timer){
 let minutes = timer.querySelector('.timer-minuts');
 let seconds = timer.querySelector('.timer-second');

 let minutesOrder = timerOrder.querySelector('.order-timer__minutes')
 let secondsOrder = timerOrder.querySelector('.order-timer__seconds')
  let time = 900;
  const startCount = setInterval(startTimer, 1000);
  
   function startTimer() {
    let minutsTime = Math.floor(time / 60);
    let secondTime = Math.floor(time % 60);
  
    minutes.textContent = minutsTime < 10 ? '0' + minutsTime : minutsTime;
    seconds.textContent = secondTime < 10 ? '0' + secondTime : secondTime;
  
    time == 0 ? clearInterval(startCount) : time--;
  }

  const startCountOrder = setInterval(startOrderTimer, 1000);

  function startOrderTimer() {
    let minutsTime = Math.floor(time / 60);
    let secondTime = Math.floor(time % 60);
  
    minutesOrder.textContent = minutsTime < 10 ? '0' + minutsTime : minutsTime;
    secondsOrder.textContent = secondTime < 10 ? '0' + secondTime : secondTime;
  
    time == 0 ? clearInterval(startCountOrder) : time--;
  }
}
const timer = (id) => {

  const addZero = (num) => {
    if(num <= 9){
      return '0'+num;
    } else{
      return num;
    }
  }


  const getTimeRemaining = () => {
    let time = Math.floor(new Date()) + 900000,
      seconds = Math.floor((time / 1000) % 60),
      minuts = Math.floor((time / 1000 / 60) % 60),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    
    return {  
      'total': time,
      'hours': hours,
      'minuts': minuts,
      'seconds': seconds
    }
  }
  console.log();
  const setClock = (selector) => {
    const timer = document.querySelector(selector),
      minuts = timer.querySelector('.timer-minuts'),
      seconds = timer.querySelector('.timer-second'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      const time = getTimeRemaining();
      minuts.textContent = addZero(time.minuts);
      seconds.textContent = addZero(time.seconds);
      if (time.total <= 0) {
        minuts.textContent = '00';
        seconds.textContent = '00';
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id);
}

timer('.stock-timer__inner')
document.addEventListener("DOMContentLoaded", (e) => {
  const display = document.querySelector(".display");
  const startBtn = document.querySelector(".start");
  const pauseBtn = document.querySelector(".pause");
  const resetBtn = document.querySelector(".reset");

  let inter; //setInterval
  let isRunning = false; //by zapobiec kolejnemu naciśnieciu "start" podczas gdy stoper pracuje (kolejne uruchomienie intrewału)

  const time = {
    msec: 0,
    sec: 0,
    min: 0,
  };

  const audio = new Audio("Windows Ding.wav");

  startBtn.addEventListener("click", (e) => {
    start();
  });
  pauseBtn.addEventListener("click", (e) => {
    pause();
  });
  resetBtn.addEventListener("click", (e) => {
    reset();
  });

  function start() {
    if (!isRunning) {
      isRunning = true;
      inter = setInterval(() => {
        // audio.play();
        time.msec++;
        console.log("tik tok");
        if (time.msec == 10) {
          time.sec++;
          git;
          time.msec = 0;
        }
        if (time.sec == 60) {
          time.min++;
          time.sec = 0;
        }
        if (time.min == 60) {
          reset();
        }
        setTime();
      }, 100);
    }
  }

  function pause() {
    isRunning = false;
    clearInterval(inter);
  }

  function reset() {
    pause();
    time.msec = 0;
    time.sec = 0;
    time.min = 0;
    setTime();
  }

  function setTime() {
    display.innerHTML =
      (time.min < 10 ? "0" + time.min : time.min) +
      ":" +
      (time.sec < 10 ? "0" + time.sec : time.sec) +
      ":" +
      (time.msec < 10 ? "0" + time.msec : time.msec);
  }
});

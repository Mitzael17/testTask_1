const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {

  let timer;

  return (timestamp) => {

    clearInterval(timer);
    makeStepTimer();

    timer = setInterval( () => {

      makeStepTimer();

    }, 1000)

    function makeStepTimer() {

      if(timestamp === -1) {

        clearInterval(timer);
        return;

      }

      const seconds = timestamp % 60;
      const minutes = (timestamp - seconds) / 60 % 60;
      const hours = (timestamp - minutes * 60 - seconds) / 3600;

      timerEl.innerHTML = `
        ${hours >= 100 ? hours : `0${hours}`.slice(-2)} :
        ${`0${minutes}`.slice(-2)} :
        ${`0${seconds}`.slice(-2)}
      `;

      timestamp--;

    }

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {

  inputEl.value = inputEl.value.replace(/\D/g, '');

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

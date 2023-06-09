const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');

resetButtonEl.addEventListener('click', () => {
  counterValueEl.textContent = 0;

  counterEl.classList.remove('counter--limit');

  counterTitleEl.textContent = 'Fancy Counter';

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  resetButtonEl.blur();
});

decreaseButtonEl.addEventListener('click', () => {
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber = +currentValue;

  let newValue = currentValueAsNumber - 1;

  if (newValue < 0) {
    
    newValue = 0;
  }

  counterValueEl.textContent = newValue;

  decreaseButtonEl.blur();
});

const incrementCounter = () => {
  // get current value of counter
  const currentValue = counterValueEl.textContent;
    
  // convert value to number type
  const currentValueAsNumber = +currentValue;

  // increment by 1
  let newValue = currentValueAsNumber + 1;

  // check if new value is greater than 5
  if (newValue > 10) {
    // if it is, force it to be 5 instead
    newValue = 10;

    // give visual indicator that limit has been reached
    counterEl.classList.add('counter--limit');

    // update counter title to say limit has been reached
    counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for >5';

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  // set counter element with new value
  counterValueEl.textContent = newValue;

  // unfocus (blur) button
  increaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);
document.addEventListener('keydown', incrementCounter);
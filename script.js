'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-button');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const keyboard = document.querySelector('.user');

const equation = function (input) {
  return (input / 6.76).toFixed(2);
};

const conversion = function () {
  const userInput = Number(document.querySelector('.user').value);
  modal.showModal();
  if (!userInput == '') {
    displayMessage(
      `${userInput} Chinese Yuan converts to ${equation(userInput)} US Dollars.`
    );
  } else {
    displayMessage('You entered nothing, try again pal.');
  }
};

openModal.addEventListener('click', conversion);

closeModal.addEventListener('click', () => {
  displayMessage('');
  modal.close();
});

keyboard.onkeyup = function (e) {
  if (e.key === 'Enter') {
    conversion();
  }
};

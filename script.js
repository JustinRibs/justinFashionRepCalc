'use strict';

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-button');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const equation = function (input) {
  return (input / 6.76).toFixed(2);
};

openModal.addEventListener('click', () => {
  const userInput = Number(document.querySelector('.user').value);
  modal.showModal();
  if (!userInput == '') {
    displayMessage(
      `${userInput} Chinese Yuan converts to ${equation(userInput)} US Dollars.`
    );
  } else {
    displayMessage('You entered nothing, try again pal.');
  }
});

closeModal.addEventListener('click', () => {
  displayMessage('');
  modal.close();
});

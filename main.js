var $modal = document.querySelector('.modal-container-closed');
var openButton = document.querySelector('.open-button');
var submitButton = document.querySelector('.submit-button');
var modalClassSelector = document.querySelector('.background-modal');
openButton.addEventListener('click', openModal);

function openModal(event) {
  modalClassSelector.className = 'background-modal';

}

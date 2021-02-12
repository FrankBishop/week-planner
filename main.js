var $modal = document.querySelector('.modal-container-closed');
var openButton = document.querySelector('.open-button');
var submitButton = document.querySelector('.submit-button');
var modalClassSelector = document.querySelector('.background-modal');
var daySelect = document.querySelector('.day-select');
var timeSelect = document.querySelector('.time-select');
var textEntry = document.querySelector('.text-entry');
openButton.addEventListener('click', openModal);

submitButton.addEventListener('click', submitPlan)

var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};


var inputs = {
  day: daySelect.value,
  time: timeSelect.value,
  description: textEntry.value
};

function openModal(event) {
  modalClassSelector.className = 'background-modal';

}

function submitPlan (event) {
  console.log('it submits');
}

var $modal = document.querySelector('.modal-container-closed');
var openButton = document.querySelector('.open-button');
var submitButton = document.querySelector('.submit-button');
var modalClassSelector = document.querySelector('.background-modal');
var daySelect = document.querySelector('.day-select');
var timeSelect = document.querySelector('.time-select');
var textEntry = document.querySelector('.text-entry');
var $daysOfTheWeek = document.querySelector('.row');
var $seventhColumn = document.querySelectorAll('.one-seventh-column');
var $timeInfo = document.querySelectorAll('.time');
var $descriptionInfo = document.querySelectorAll('.description');
openButton.addEventListener('click', openModal);

submitButton.addEventListener('click', submitPlan);

var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

var inputs = {};

function openModal(event) {
  modalClassSelector.className = 'background-modal';
  openButton.className = 'hidden';

}

function submitPlan(event) {
  event.preventDefault();

  modalClassSelector.className = 'background-modal hidden';
  openButton.className = 'open-button';
  console.log('it submits');
  inputs.day = daySelect.value;
  inputs.time = timeSelect.value;
  inputs.description = textEntry.value;
  console.log(inputs)
  data.entries.push(inputs);
  console.log(data.entries);
}

$daysOfTheWeek.addEventListener('click', DayEntry);

function DayEntry(event) {
  for (var i = 0; i < $seventhColumn.length; i++) {
    if (event.target.textContent === $seventhColumn[i].textContent) {
      var dayText = document.querySelector('.day');
      dayText.textContent = event.target.textContent;
      $timeInfo.textContent = data.entries[0].time;
      console.log(data.entries[0].time)

    }
  }
}

// when click on day
// create table

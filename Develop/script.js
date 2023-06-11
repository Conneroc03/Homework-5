// variables for all the elements that will be used in the functions
var currentDayEl = $('#currentDay');
var saveBtns = $('.saveBtn');
var timeBlockEl = $('time-block');
var textAreaEl = $('description');
var hour9El = $('#hour-9');
var hour10El = $('#hour-10');
var hour11El = $('#hour-11');
var hour12El = $('#hour-12');
var hour13El = $('#hour-13');
var hour14El = $('#hour-14');
var hour15El = $('#hour-15');
var hour16El = $('#hour-16');
var hour17El = $('#hour-17');
var pastEl = $('past');
var presentEl = $('present');
var futureEl = $('future');
// displ;ay the current date in the header
function displayDate () {
  var currentDate = dayjs().format('MMMM D YYYY');
  currentDayEl.text(currentDate);
}
// applying the past, present, future classes to the time blocks based on the current time
function changetimeclass () { 
  var currentTime = dayjs().hour();
  console.log(currentTime);
  for (var i = 9; i <= 17; i++) {
    if (currentTime > i) {
      $('#hour-' + i).addClass('past');
    } else if (currentTime < i) {
      $('#hour-' + i).addClass('future');
    } else {
      $('#hour-' + i).addClass('present');
    }
  }
}

for (var i = 0; i < saveBtns.length; i++) {
  saveBtns[i].addEventListener('click', saveText);
}
// save the text to local storage
function saveText () {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, text);
}
// get the saved text from local storage
function getSavedText () {
  for (var i = 9; i <= 17; i++) {
    $('#hour-' + i + ' .description').val(localStorage.getItem('hour-' + i));
  }
}
// calling the functions
  displayDate();
  changetimeclass();
  getSavedText();


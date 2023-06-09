// variables
const timeblockObjects = [];

// gets time blocks from local storage
function getCurrentTimeblocks() {
  const currentTimeblocks = localStorage.getItem('timeblockObjects');
  return currentTimeblocks ? JSON.parse(currentTimeblocks) : [];
}
const currentTimeblocks = getCurrentTimeblocks();

// Displays timeblocks in rows
const displayTimeBlockRows = () => {
  const currentHour = moment().format('h');
  const container = document.querySelector('.container');
  for (let i = 9; i <= 17; i++) {
    const timeBlock = document.createElement('div');
    timeBlock.classList.add('row');
    timeBlock.id = `timeblock-${i}`;
    timeBlock.innerHTML = `
      <div class="col-1 hour">
        ${moment(i, 'H').format('hA')}
      </div>
      <textarea class="col-10 ${i < currentHour ? 'past': i === currentHour ? 'present' : 'future'}"></textarea>
      <button class="col-1 btn saveBtn">
        <i class="fas fa-save"></i>
      </button>
    `;
    container.appendChild(timeBlock);
  }
};
// saves time blocks to local storage
function saveTimeBlockObject() {
  localStorage.setItem('timeblockObjects', JSON.stringify(timeblockObjects));
}

// click function 
const containerClicked = (event) => {
  if (event.target.classList.contains('saveBtn')) {
    const timeBlockHour = event.target.parentElement.id.split('-')[1];
    const timeBlockTodo = event.target.previousSibling.value;
    const foundTimeBlock = timeblockObjects.find(block => block.hour === timeBlockHour);
    if (foundTimeBlock) {
      foundTimeBlock.todo = timeBlockTodo;
    } else {
      timeblockObjects.push({ hour: timeBlockHour, todo: timeBlockTodo });
    }
    saveTimeBlockObject();
  }
};


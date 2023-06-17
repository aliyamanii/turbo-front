
// Get references to elements
const daySelect = document.getElementById('daySelect');
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to day select
daySelect.addEventListener('change', () => {
  const selectedDay = daySelect.value;
  updateTaskList(selectedDay);
});

// Add event listener to add task button
addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button>Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
  }
});

// Add event listener to task list to handle delete button clicks
taskList.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    taskList.removeChild(li);
    saveTasks();
  }
});

// Function to populate day select options
function populateDaySelect() {
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = `day${i}`;
    option.text = i;
    daySelect.appendChild(option);
  }
}

// Function to update the task list based on the selected day
function updateTaskList(day) {
  const tasks = getTasks(day);
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task}</span><button>Delete</button>`;
    taskList.appendChild(li);
  });
}

// Function to save tasks to local storage
function saveTasks() {
  const selectedDay = daySelect.value;
  const tasks = Array.from(taskList.querySelectorAll('li span')).map(span => span.innerText);
  localStorage.setItem(selectedDay, JSON.stringify(tasks));
}

// Function to retrieve tasks from local storage
function getTasks(day) {
  const storedTasks = localStorage.getItem(day);
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Initialize day select and task list
populateDaySelect();
updateTaskList(daySelect.value);

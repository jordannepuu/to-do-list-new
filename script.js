// Reference to the title element
const title = document.getElementById('title');

// Function to display current day, month, and date with emojis
function updateTitle() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();

    const dayOfWeek = daysOfWeek[today.getDay()];
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });

    // Set title with ghost and pumpkin emojis
    title.textContent = `👻 ${dayOfWeek}, ${month} ${day} - To-Do List 🎃`;
}

// Call the function to set the title when the page loads
updateTitle();

const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    listItem.addEventListener('click', () => listItem.classList.toggle('done'));
    listItem.querySelector('.delete-btn').addEventListener('click', () => listItem.remove());

    taskList.appendChild(listItem);
    newTaskInput.value = ''; // Clear input field
}

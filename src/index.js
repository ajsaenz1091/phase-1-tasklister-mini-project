document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description'); // input field
  const submit = input.nextElementSibling; // submit button
  const ul = document.getElementById('tasks'); // Unordered List


  submit.addEventListener('click', createNewTask)

  
  const createNewTask = (e) => {
    const li = document.createElement('li') // <li>  </li>
    const Item = input.value;
    li.innerHTML = Item;
    ul.appendChild(li);
    e.preventDefault();
  }


});

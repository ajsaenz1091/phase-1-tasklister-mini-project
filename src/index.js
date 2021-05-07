document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.forms[0];
  const input = document.getElementById('new-task-description'); // input field
  const submit = input.nextElementSibling; // submit button
  const ul = document.getElementById('tasks'); // Unordered List
  let liCount = 0;

  // Submit button handler function

  const createNewTask = (e) => {
    let li = document.createElement('li')  // <li>  </li>
    li.setAttribute('id','description')
    let button = document.createElement("button");
    button.setAttribute('id', 'delete-task'); 
    button.style.marginLeft = '20px'; // sets the margin left property of the button to 20px
    li.innerHTML = input.value;
    button.innerHTML = "X";
    li.appendChild(button);
    ul.appendChild(li)
    // form.reset();
    button.onclick = function () {
      this.parentElement.remove();
    }

    e.preventDefault();
  }
  //submit button even listerner
  submit.addEventListener('click', createNewTask)
});

let todoList =JSON.parse(localStorage.getItem('todoList')) || [
    {
        items: 'Buy Milk',
        dueDate: '11/09/2021'
    },
    {
        items: 'Buy Bread',
        dueDate: '01/10/2021'
    },
    {
        items: 'Go to college',
        dueDate: '08/10/2021'
    }
]; // Load the list from localStorage or initialize with default values

displayItems(); // Display the todoList on page load


function addTodo() {
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoItem = inputElement.value; // get the value from the input element
    let todoDate = dateElement.value; // get the value from the date element

    if(todoItem && todoDate) { // check if both the input and date elements are filled
        todoList.push({items: todoItem, dueDate: todoDate}); // add the todo item to the todoList array
        inputElement.value = ""; // clear the input element
        dateElement.value = ""; // clear the date element
        saveToLocalStorage(); // save the updated todoList to localStorage
        displayItems();  // display the updated todoList
    }
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = '';
  for( let i=0; i< todoList.length; i++){

    // let items = todoList[i].items;
    // let date = todoList[i].date;

    let {items, dueDate} = todoList[i];

    newHtml += `
        <span>${items}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button
    `
  }
  containerElement.innerHTML = newHtml;
}


function deleteTodo(index){
    todoList.splice(index, 1); // Remove the todo item at the specified index
    saveToLocalStorage(); // save the updated todoList to localStorage
    displayItems(); // display the updated todoList
}

function saveToLocalStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList)); // Save the todoList as a string in localStorage
}
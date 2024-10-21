//Alert message
alert('JavaScript is successfully linked to this page.')

// Change the color of my name when I hover over the section
const section = document.querySelector('section')
const animeName = section.querySelector('b')

section.addEventListener('mouseover', () => {
    setTimeout(()=>{
    animeName.style.color = '#800517'
    },600)
})


//Add a welcome message (Assignment 3 - Dynamic Welcome)
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const key ="It's a secret to everybody"

const message = `The key is the first argument accepted by method setItem().  
It is a required string argument representing the name of 
the web storage property(localStorage) you want to create or update.

It also serves as the identifier for the data you are storing. 
This key is used to retrieve the corresponding value later.` //My secret message:  key is a string that 

//The welcome variable will vary, therefor we have to declare it with let              
let welcome = document.querySelector('.welcome')

if(isMorning){
    welcome.textContent = 'Good morning and welcome to my site!'
}else if(isAfternoon){
    welcome.textContent = 'Good Afternoon and welcome to my site!'
}else{
    welcome.textContent = 'Good Evening and welcome to my site!'
}

// Store a message in local storage
localStorage.setItem(key, message)


// CODE FOR ASSIGMENT WEEK 6

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

 showImages() 

const previous = document.querySelector('#prev')
const next = document.querySelector('#next')
const carousel = document.querySelector('#carousel')

// if the condition is true (currentImage < urls.length - 1), increment currentImage, if false set the currentImage to its current value

next.addEventListener('click', () => {
    currentImage = (currentImage < urls.length - 1) ? currentImage +1 : currentImage; //Using the ternary operator
    showImages();
   // console.log('next' + currentImage)
});

// if the condition is true (currentImage > 0), decrement currentImage (currentImage -1 ), if false set the currentImage to its current value

previous.addEventListener('click', () => {
    currentImage = (currentImage > 0) ? currentImage -1 :currentImage; 
    showImages();
   // console.log('previous' + currentImage)
});

 setInterval(() => {
     // code to run EVERY 5 seconds
     currentImage = (currentImage < urls.length - 1) ? currentImage + 1 : 0; 
    showImages();
 }, 5000)


// CODE FOR ASSIGMENT WEEK 7

// Declare variables and Select DOM elements
const todoList = document.querySelector('.todo-list');
const input = document.querySelector('#new-todo');
const btnCreatAdd = document.querySelector('#add-button');
//const li = document.createElement('li');

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// 2. Create a function renderTodos

const renderTodos = () => {
     todoList.innerHTML = ''  // Clear the list before we recreate them

    // 3. Loop through the todos array and create list items
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        todoList.append(li);
    });
};

// Event listener for adding a new todo
btnCreatAdd.addEventListener('click', () => {
 
        // Add a new item to the list
        todos.push({ text: input.value, completed: false });
        
        // Save the list to local storage
        localStorage.setItem('todo-list', JSON.stringify(todos));

        input.value = ''; //Added to Clear the input once I click on the button

        renderTodos(); //call the function created in step 2 to update the html.
});

renderTodos(); //call the function created in step 2 to update the html.


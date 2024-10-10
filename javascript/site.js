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


// CODE FROM WEEK 5

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
next.addEventListener('click', () => {


    currentImage = (currentImage < urls.length - 1) ? currentImage +1 : currentImage;
    showImages();
});

previous.addEventListener('click', () => {
    currentImage = (currentImage > 0) ? currentImage -1 :currentImage; 
    showImages();
});

 setInterval(() => {
     // code to run EVERY 5 seconds
     currentImage = (currentImage < urls.length - 1) ? currentImage + 1 : 0; // Loop back to 0 after the last image
    showImages();
 }, 5000)



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
const key =" It's a secret to everybody"

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

localStorage.setItem(key, message)

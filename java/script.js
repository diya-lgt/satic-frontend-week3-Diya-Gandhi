
const navToggle=document.querySelector(".nav-toggle")
const header=document.querySelector(".header")

navToggle.onclick=()=>{
header.classList.toggle("nav-active")
}

const reveals=document.querySelectorAll(".reveal")

function reveal(){

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top
const height=window.innerHeight

if(top<height-100){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",reveal)


/* CONTACT FORM VALIDATION */

const form = document.getElementById("contact-form")

form.addEventListener("submit",function(e){

e.preventDefault()

let valid=true

const name=document.getElementById("name")
const email=document.getElementById("email")
const message=document.getElementById("message")

validateField(name)
validateField(message)
validateEmail(email)

function validateField(field){

const parent=field.parentElement

if(field.value.trim()===""){

parent.classList.add("is-invalid")
valid=false

}else{

parent.classList.remove("is-invalid")

}

}

function validateEmail(field){

const parent=field.parentElement

const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(field.value)){

parent.classList.add("is-invalid")
valid=false

}else{

parent.classList.remove("is-invalid")

}

}

if(valid){

alert("Message Sent Successfully!")

form.reset()

}

})

"use strict";

const text = document.querySelector("span");
const column = document.querySelector(".column");
const row = document.querySelector(".row");
const box = document.querySelector(".textBox")
let textX = text.screenX
let textY = text.screenY
console.log(text.style);

window.addEventListener("mousemove", (event) => {
    text.innerHTML = `${event.clientX}px, ${event.clientY}px`;
    text.style.clientX = event.clientX
    text.style.clientY = event.clientY
})
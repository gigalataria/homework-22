const btn = document.querySelector(".btn")
const body1 = document.querySelector(".body1")
console.log(btn)
console.log(body1)


btn.addEventListener("click", () => {
    console.log("hello")
    body1.style.backgroundColor = "green"
    btn.textContent = "color green"
})

const btn2 = document.querySelector(".btn2")

btn2.addEventListener("click", () => {
    console.log("hello")
    body1.style.backgroundColor = "blue"
    btn2.textContent = "color blue"
})

const btn3 = document.querySelector(".btn3")
btn3.addEventListener("click", () => {
    console.log("hello")
    body1.style.backgroundColor = "red"
    btn3.textContent = "color red"
})


const btn4 = document.querySelector(".btn4")
btn4.addEventListener("click", () => {
    console.log("hello")
    body1.style.backgroundColor = "yellow"
    btn4.textContent = "color yellow"
})

window.addEventListener("load", () => {
    let burgerFunction = () => {
        let navigation = document.querySelector(".navigation") 
        let burger = document.querySelector(".burger img")
        burger.addEventListener("click", () => {
        navigation.classList.toggle("active")
        burger.classList.toggle("close")
    })
    }
    burgerFunction()   
})
window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector(".navbar")
        navbar.classList.toggle("stick", window.scrollY > 0) 
    })
})

// let age1 = prompt("Son")
// let age2 = prompt("Son2")
// let javob = 1
// function sonlar (x, y){
//     for(let i = 0; i<=y; i++){
//          javob = javob * y
//         console.log(javob)
//     }
// }
// sonlar(age1, age2)

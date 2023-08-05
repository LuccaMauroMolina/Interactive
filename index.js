let centro1 = document.querySelector(".centro")
let centro2 = document.querySelector(".segundo")

let boton = document.getElementById("submit")
let Numero = document.getElementById("number")
let botones = document.querySelectorAll(".rating-number")

botones.forEach((numero) => {
    numero.addEventListener("click", () => {
        Numero.innerHTML = numero.innerHTML
    })
})



boton.addEventListener("click", () => {
    centro2.classList.remove(".segundo")
    centro1.style.display = "none"
    centro2.style.display = "flex"
})
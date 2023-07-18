const DOM = document.getElementById("interactive")

const boton = document.getElementById("boton")

const mostrarNumber = () => {

    DOM.innerHTML = `
    <span class="spaner">1</span>
    <span class="spaner">2</span>
    <span class="spaner">3</span>
    <span class="spaner">4</span>
    <span class="spaner">5</span>
    `

    boton.innerHTML = `<button>SUBMIT</button>`

        
    }


mostrarNumber()



const Cant = () => {
    
}


let spaneable = document.querySelector(".spaner")

let orange = `hsl(25, 97%, 53%)`

function click(){

Array.from(spaneable).forEach(spaneable => {
    spaneable.addEventListener("click", () => {
        spaneable.style.backgroundColor = orange
        spaneable.style.color = "white"

        

    })
})
}

click()
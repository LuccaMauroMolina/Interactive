let input = document.querySelectorAll(".radius")

for(let i = 0; i < 1; i++){
    let orange = 'hsl(25, 97%, 53%)'

    input.forEach(input => {
        input.addEventListener("change", color)
    })

    function color(){
        let selected = document.querySelector("input[name='rating']:checked")
        
        console.log(selected)
    }
    
}


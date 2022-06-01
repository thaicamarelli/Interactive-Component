let choises = document.getElementsByClassName("rating-numbers")

document.querySelector(".thankyou-div").style.display = "none"

for (let i = 0; i <choises.length; i++){
    choises[i].addEventListener("click",function(){
    validateColor()

    choises[i].classList.toggle("rating-numbers-active")
    let chosenNumber = choises[i].textContent 
    document.querySelector(".thanks-choice").innerHTML = chosenNumber  
     
    })
    
}

function validateColor(){
    for(let i =0; i <choises.length; i++){
        choises[i].classList.remove("rating-numbers-active") 
    }
}

document.querySelector("a").addEventListener("click",function(){
    document.querySelector(".rating-div").style.display = "none"
    document.querySelector(".thankyou-div").style.display = "block"
});







var choises = document.getElementsByClassName("rating-numbers")

document.querySelector(".thankyou-div").style.display = "none"

for (let i = 0; i <choises.length; i++){
    choises[i].addEventListener("click",function(){
        var chosenNumber = choises[i].textContent
        document.querySelector(".thanks-choice").innerHTML = chosenNumber
        choises[i].classList.add("rating-numbers-active")
        choises[i].classList.add("rating-numbers-active:hover")
    })
    
}

function changeDivs(){
    document.querySelector(".rating-div").style.display = "none"
    document.querySelector(".thankyou-div").style.display = "block"
}

document.querySelector("a").addEventListener("click",changeDivs);







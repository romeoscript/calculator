let result = document.getElementById("sult")

let containi = document.getElementById("contain")

function clea(){
    result.value = ""
}

// function dark(){
//     document.body.classList.toggle("darky")
//     let btn = document.querySelector(".theme")
//     let icon = document.querySelector(".icon")
//     if(document.body.classList.contains("darky")){
//         icon.classList.replace("fa-moon-o","fa-sun-o")
//         btn.style.background = "white"
//         icon.style.color = "black"

//     }
//     else{
//         icon.classList.replace("fa-sun-o", "fa-moon-o")
//         btn.style.background = "black"
//         icon.style.color = "white"
//     }
// }
function dark(){
    let theme = document.getElementById("theme")
    let icon = document.querySelector(".icon")
    if(theme.getAttribute("href") ==="app.css"){
        theme.href = "nighty.css"
        icon.classList.replace("fa-moon-o", "fa-sun-o")
    }
    else{
        theme.href = "app.css"
        icon.classList.replace( "fa-sun-o", "fa-moon-o")
    }
}
function cal(value){
    result.value += value
}
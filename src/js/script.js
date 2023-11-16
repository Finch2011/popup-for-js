const clickMe = document.getElementById('clickMe')
const close = document.getElementById('close')
const div = document.getElementById('div')
const body = document.getElementById('body')
function getPopup(){
    div.style.top = "0px"
    clickMe.style.top = "-400px"
    body.style.backgroundColor = "#000"
    
}
function closePopup(){
    div.style.top = "-500px"
    clickMe.style.top = "0px"
    body.style.backgroundColor = "#fff"
}
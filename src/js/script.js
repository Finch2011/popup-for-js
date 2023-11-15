const clickMe = document.getElementById('clickMe')
const close = document.getElementById('close')
const div = document.getElementById('div')
function getPopup(){
    div.style.top = "0px"
    clickMe.style.top = "340px"
}
function closePopup(){
    div.style.top = "-400px"
    clickMe.style.top = "0px"
}
const clickMe = document.getElementById('clickMe')
const close = document.getElementById('close')
const div = document.getElementById('div')
const div2 = document.getElementById('div2')
const body = document.getElementById('body')
const email = document.getElementById('email')
const passWord = document.getElementById('passWord')
const welcomeour = document.getElementById('welcome-our')
function getPopup(){
    div.style.top = "0px"
    clickMe.style.top = "-400px"
    body.style.backgroundColor = "#000"
    
}
function closePopup(){
    div2.style.top = "10px"
    div.style.top = "-500px"
    body.style.backgroundColor = "#000"
}
function submitValue(){
    console.log(`naem:${email.value.toLowerCase()}`)
    console.log(`passWord:${passWord.value}`)
    div2.style.top = "-500px"
    body.style.backgroundColor = "#fff"
    body.innerHTML += `
    <div id="div3"><h1 id="welcome-our">Hello! <br/>${email.value.toLowerCase()}</h1> <br/> <button type="button" class="button" id="bt" onclick="remove()">close</button> </div>`
}
function remove(){
    const removediv3 =document.getElementById('div3')
    removediv3.remove();
}
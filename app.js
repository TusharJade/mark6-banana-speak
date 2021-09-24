var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");


var btn = function act(){
    console.log("clicked!");
    outputdiv.innerText = "Andufunduthandapani " + txtInput.value
}

btnTranslate.addEventListener("click" , btn);
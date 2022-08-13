var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#translate-output")

var serverURL = "https://api.funtranslations.com/translate/navi.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured : ",error);
    alert("something wrong with server! try again after some time")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
            console.log(translatedText)
        })
        .catch(errorHandler)    
}

btnTranslate.addEventListener("click", clickHandler)
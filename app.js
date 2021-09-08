var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#input-txt');
var outputDiv = document.querySelector('#outputHere');
var serverURL = 'https://api.funtranslations.com/translate/dothraki.json';

function getTranslation(text) {
   return `${serverURL}?text=${text}`;
}

function errorHandler(error) {
   console.log('Error occured', error);
   alert('API rate limit exceeded, try again after sometime');
}

function clickEventHandler() {
   var input = txtInput.value; //taking input

   fetch(getTranslation(input))
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText; //output
      })
      .catch(errorHandler);
}
btnTranslate.addEventListener('click', clickEventHandler);

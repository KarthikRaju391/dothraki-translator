var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('#input-txt');
var outputText = document.querySelector('#outputHere');
var serverURL = 'https://api.funtranslations.com/translate/dothraki.json';

function getTranslation(text) {
	return serverURL + '?' + 'text=' + text;
}

function errorHandler(error) {
	console.log('Error occured', error);
	alert('Something is wrong with the server, try again after sometime');
}

function clickEventHandler() {
	var textInput = inputText.value;

	fetch(getTranslation(textInput))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			ouputText.innerText = translatedText;
		})
		.catch(errorHandler);
}
btnTranslate.addEventListener('click', clickEventHandler);

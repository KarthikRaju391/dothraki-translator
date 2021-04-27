var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector('#input-txt');
var outputDiv = document.querySelector('#outputHere');
var serverURL = 'https://api.funtranslations.com/translate/dothraki.json';

function getTranslation(Text) {
	return serverURL + '?' + 'text=' + Text;
}

function errorHandler(error) {
	console.log('Error occured', error);
	alert('Something is wrong with the server, try again after sometime');
}

function clickEventHandler() {
	var inputText = textInput.value; //taking input

	fetch(getTranslation(inputText))
		.then((response) => response.json())
		.then((json) => {
			var translatedText = json.contents.translated;
			outputDiv.innerText = translatedText; //output
		})
		.catch(errorHandler);
}
btnTranslate.addEventListener('click', clickEventHandler);

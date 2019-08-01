'use strict';
//crear tarjeta
// const radio = document.querySelectorAll('input').focus();
const btnCreate = document.querySelector('.button-card');
const successLink = document.querySelector('.success__link');

function sendRequest() {
const json = {
  "palette": 1,
  "name": inputName.value,
  "job": inputJob.value,
  "email": inputPhone.value,
  "phone": inputEmail.value,
  "linkedin": inputLinkedIn.value,
  "github": inputGitHub.value,
  "photo": 'data:image/png;base64,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',

};

  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response =>  response.json())
    .then(data => showURL(data))
    .catch(error => console.log(error));
};

function showURL(data) {
  if (data.success) {
    successLink.innerHTML = '<a href=' + data.cardURL + '>' + data.cardURL + '</a>';
  } else {
    successLink.innerHTML = 'ERROR:' + data.error;
  }
}

btnCreate.addEventListener('click', sendRequest);


// function getJsonFromImputs() {

//   return json;

// }

// function sendData() {
//   json = getJsonFromImputs();

//   sendRequest(json);

//   // // var inputs = Array.from(form.elements);
//   // // var json = getJSONFromInputs(inputs);
//   // json.photo = fr.result;
//   // sendRequest(json);
// }
//file
// function loadPhoto() {
//   var myFile = document.querySelector('#img-selector').files[0];
//   fr.addEventListener('load', sendData);
//   fr.readAsDataURL(myFile);
// }


//añadir funcionalidad botón de twitter (compartir mensaje y url de la tarjeta creada)
const submitButton = document.querySelector('.button-card');
const twitterShareCard = document.querySelector('.form__success-twitter');
const twitterButton = document.querySelector('.button-twitter');


function twitter() {
  twitterShareCard.classList.remove('hidden');
  submitButton.classList.add('not-available');
  const cardLink = 'https://fonts.google.com/'; //link de prueba CAMBIAAAR!!
  const twitterText = encodeURIComponent('Hey! This is my new profile card :)');
  const hashtags = encodeURIComponent('adalab,js,css');
  twitterButton.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${cardLink}&hashtags=${hashtags}`;
}

submitButton.addEventListener('click', twitter);




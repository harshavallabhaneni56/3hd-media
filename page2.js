


//initialising firebase

const userFullName = document.getElementById('userFullName');
const userEmail = document.getElementById('userEmail');
const userNumber = document.getElementById('userNumber');
const submit = document.getElementById('submit');
const userCity= document.getElementById('userCity');
const userMessage = document.getElementById('userMessage'); 
const userOrganisation = document.getElementById('userOrganisation'); 

const database = firebase.database();
const servicesRef = database.ref('/services');
submit.addEventListener('click', e => {
  e.preventDefault();
  const autoId = servicesRef.push().key
  servicesRef.child(autoId).set({
    full_name: userFullName.value,
    user_email: userEmail.value,
    user_city: userCity.value,
    user_message: userMessage.value,
    user_organisation: userOrganisation.value,
    user_number: userNumber.value
  });
});
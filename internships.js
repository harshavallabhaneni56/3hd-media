const userFullName = document.getElementById('userFullName');
const userEmail = document.getElementById('userEmail');
const userNumber = document.getElementById('userNumber');
const submit = document.getElementById('submit');
const userCity= document.getElementById('userCity');
const useruserAddress = document.getElementById('userAddress'); 
const date = document.getElementById('date'); 
const userqualification= document.getElementById('userqualification');
const userCollege = document.getElementById('userCollege'); 
const userspecialization= document.getElementById('userspecialization');

const database = firebase.database();
const internRef = database.ref('/intern');
submit.addEventListener('click', e => {
  e.preventDefault();
  const autoId = internRef.push().key
  internRef.child(autoId).set({
    full_name: userFullName.value,
    user_email: userEmail.value,
    user_city: userCity.value,
    user_address: userAddress.value,
    user_qualification: userqualification.value,
    user_college: userCollege.value,
    user_specialization: userspecialization.value,
    user_date: date.value,
    user_number: userNumber.value
  });
});
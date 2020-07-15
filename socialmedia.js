const userFullName = document.getElementById('userFullName');
const userEmail = document.getElementById('userEmail');
const userNumber = document.getElementById('userNumber');
const submit = document.getElementById('submit');


const database = firebase.database();
const socialmediaRef = database.ref('/socialmedia');
submit.addEventListener('click', e => {
  e.preventDefault();
  const autoId = socialmediaRef.push().key
  socialmediaRef.child(autoId).set({
    full_name: userFullName.value,
    user_email: userEmail.value,
    user_number: userNumber.value
  });
});
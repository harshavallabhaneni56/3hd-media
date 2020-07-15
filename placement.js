
const userFullName = document.getElementById('userFullName');
const userEmail = document.getElementById('userEmail');
const userNumber = document.getElementById('userNumber');
const submit = document.getElementById('submit');
const userCollege= document.getElementById('userCollege');


const database = firebase.database();
const placementsRef = database.ref('/placements');
submit.addEventListener('click', e => {
  e.preventDefault();
  const autoId = placementsRef.push().key
  placementsRef.child(autoId).set({
    full_name: userFullName.value,
    user_email: userEmail.value,
    user_college: userCollege.value,
    user_number: userNumber.value
  });
});
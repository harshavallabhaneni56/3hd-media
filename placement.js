let formMessage = firebase.database().ref('placements');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#userFullName').value;
  let email = document.querySelector('#userEmail').value;
  let userCollege = document.querySelector('#userCollege').value;
  let phoneNumber = document.querySelector('#phoneNumber').value;
  

  //send message values
  sendMessage(name, email, phoneNumber, userCollege);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, phoneNumber, userCollege) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    College: userCollege,
    number: phoneNumber
    
  });
}

var firestore = firebase.firestore();

//dom elements

const submitBtn = document.querySelector("#submit");

// ERROR: you used the id of #userName, suppose to be: userFullName
let userName = document.querySelector("#userFullName");

let userEmail = document.querySelector("#userEmail");
let userNumber = document.querySelector("#userNumber");



document.getElementById("submit").addEventListener("click", function () {
  //submitBtn.addEventListener("click", function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  
  let userNumberInput = userNumber.value;
 

  //Access Database
  // ERROR: db is not referenced to anything. You set it to firestore!
  firestore
    // ERROR: You didn't have a collection. Where would firebase send them!
    .collection("socialmedia")
    .doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
      number: userNumberInput
    })
    .then(function () {
      console.log("Data Saved");
    })
    .catch(function (error) {
      console.log(error);
    });
});
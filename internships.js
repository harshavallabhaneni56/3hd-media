
var firestore = firebase.firestore();

//dom elements

const submitBtn = document.querySelector("#submit");

// ERROR: you used the id of #userName, suppose to be: userFullName
let userName = document.querySelector("#userFullName");

let userEmail = document.querySelector("#userEmail");
let userAddress = document.querySelector("#userAddress");
let userNumber = document.querySelector("#userNumber");
let userCity = document.querySelector("#userCity");
let userdate = document.querySelector("#date");

let userqualification = document.querySelector("#userqualification");
let userspecialization = document.querySelector("#userspecialization");


document.getElementById("submit").addEventListener("click", function () {
  //submitBtn.addEventListener("click", function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  
  let userAddressInput = userAddress.value;
  let userNumberInput = userNumber.value;
  let userCityInput = userCity.value;
  
  let userdateInput = userdate.value;
  let userqualificationInput = userqualification.value;
  let userspecializationInput = userspecialization.value;

  //Access Database
  // ERROR: db is not referenced to anything. You set it to firestore!
  firestore
    // ERROR: You didn't have a collection. Where would firebase send them!
    .collection("internships")
    .doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
    
      address : userAddressInput,
      number: userNumberInput,
      city: userCityInput,
      
      date: userdateInput,
      qualification : userqualificationInput,
      specialisation : userspecializationInput
    })
    .then(function () {
      console.log("Data Saved");
    })
    .catch(function (error) {
      console.log(error);
    });
});
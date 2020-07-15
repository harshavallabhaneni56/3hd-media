var firebaseConfig = {
  apiKey: "AIzaSyAXUKMgmYyeLXOhQzCB6gDiErQsiZEVL8o",
  authDomain: "hd-media-62b9f.firebaseapp.com",
  databaseURL: "https://hd-media-62b9f.firebaseio.com",
  projectId: "hd-media-62b9f",
  storageBucket: "hd-media-62b9f.appspot.com",
  messagingSenderId: "309391020834",
  appId: "1:309391020834:web:00bb0fe17bca5412eb4b7b",
  measurementId: "G-QDYZTCJFVN",
};

//initialising firebase

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//dom elements

const submitBtn = document.querySelector("#submit");

// ERROR: you used the id of #userName, suppose to be: userFullName
let userName = document.querySelector("#userName");
let userMessage = document.querySelector("#userMessage");
let userEmail = document.querySelector("#userEmail");
let userNumber = document.querySelector("#userNumber");
let userCity = document.querySelector("#userCity");
let userOrganisation = document.querySelector("#userOrganisation");


document.getElementById("submit").addEventListener("click", function () {
  //submitBtn.addEventListener("click", function() {
  let userNameInput = userName.value;
  let userEmailInput = userEmail.value;
  let userMessageInput = userMessage.value;
  let userNumberInput = userNumber.value;
  let userCityInput = userCity.value;
  let userOrganisationInput = userOrganisation.value;

  //Access Database
  // ERROR: db is not referenced to anything. You set it to firestore!
  firestore
    // ERROR: You didn't have a collection. Where would firebase send them!
    .collection("submissions")
    .doc()
    .set({
      name: userNameInput,
      email: userEmailInput,
      messege: userMessageInput,
      number: userNumberInput,
      city: userCityInput,
      organisation: userOrganisationInput
    })
    .then(function () {
      console.log("Data Saved");
    })
    .catch(function (error) {
      console.log(error);
    });
});
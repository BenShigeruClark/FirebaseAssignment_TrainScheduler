  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmRPattMEBMcJIMhhR8Oev2IM3EWvOsps",
    authDomain: "trainschedulerhw-6e9f0.firebaseapp.com",
    databaseURL: "https://trainschedulerhw-6e9f0.firebaseio.com",
    projectId: "trainschedulerhw-6e9f0",
    storageBucket: "",
    messagingSenderId: "49992363112"
  };
  firebase.initializeApp(config);

// create variable to reference Firebase
var database = firebase().database;

// variables referencing data column's
 var trainName = "";
 var destination = "";
 var frequency = "";
 var nextArrival = "";
 var minutesAway = "";                          


// Get Submit button to work when clicked 
 $(".btn btn-primary btn-lg").on("click", function(event) {

 })


  /* Get input fields to send accepted data to table for Current 
  Train Schedule when Submit button is pressed */

// Get data to add onto each additional data entry
// make sure that the input data is logged and saved in schedule

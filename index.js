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

    // variable to reference database.
  var database = firebase.database();

    //Button Click function 
   $("#submitButton").on("click", function() {
     


      // Values from the text boxes
            var trainName = $('#trainNameInput').val().trim();
            var destination = $('#destinationInput').val().trim();
            var firstTrainTime = $('#firstTrainTimeInput').val().trim();
            var frequency = $('#frequencyInput').val().trim();
            var nextArrival = moment($("#firstTrainTimeInput").val().trim()).format("hh:mm:ss");
            var minutesAway = $('minutesAway').val().trim();

            // console.log(trainName);
            // console.log(destination);
            // console.log(firstTrainTime);
            // console.log(frequency);
            // console.log(nextArrival);
            // console.log(minutesAway);

  // creating a local object that will be pushed to firebase
           database.ref().push({
              trainName: trainName,
              destination: destination,
              firstTrainTime: firstTrainTime,
              frequency: frequency,
              nextArrival: nextArrival,
              minutesAway: minutesAway, 
            });
        
            database.push(nextTrain);
        

      //Clear textboxes
            $("#trainNameInput").val("");
            $("#destinationInput").val("");
            $("#firstTrainTimeInput").val("");
            $("#frequencyInput").val("");
           
            // prevent page from refreshing
            return false;
        
          });



          database.on("child_added", function(childSnapshot) {
              
              console.log(childSnapshot.val());
              console.log(childSnapshot.val().trainName);
              console.log(childSnapshot.val().destination);
              console.log(childSnapshot.val().firstTrainTime);
              console.log(childSnapshot.val().frequency);
              console.log(childSnapshot.val().nextArrival);
              console.log(childSnapshot.val().minutesAway);



              var firebaseTrainName = childSnapshot.val().trainName;
              console.log(firebaseTrainName);
          })




          $("#trainTable > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + firstTrainTime + 
          "</td><td>" + frequency + "mins" + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");







// create variable to reference Firebase
// var database = firebase().database;

// variables referencing data column's
//  var trainName = "";
//  var destination = "";
//  var firstTrainTime = "";
//  var frequency = "";
//  var nextArrival = "";
//  var minutesAway = "";                          


// Get Submit button to work when clicked 
//  $(".btn btn-primary btn-lg").on("click", function(event) {
//    event.preventDefault();
   //when button is clicked data should be sent to firebase and 
  //  logged into the page.
  // Get inputs
//   trainName = $('#trainNameInput').val().trim();
//   destination = $('#destinationInput').val().trim();
//   firstTrainTime = $('#firstTrainTimeInput').val().trim();
//   frequency = $('#frequencyInput').val().trim();
 
//   database.ref().set({
//     trainName: trainName,
//     destination: destination,
//     firstTrainTime: firstTrainTime,
//     frequency: frequency
//     })
// })
  
//   database.ref().on('value', function(snapshot) {
//     console.log(snapshot);

//     console.log(snapshot.val().trainName);
//     console.log(snapshot.val().destination);
//     console.log(snapshot.val().firstTrainName);
//     console.log(snapshot.val().frequency);
//   });

  // Get data to add onto each additional data entry
// make sure that the input data is logged and saved in schedule



  /* Get input fields to send accepted data to table for Current 
  Train Schedule when Submit button is pressed */


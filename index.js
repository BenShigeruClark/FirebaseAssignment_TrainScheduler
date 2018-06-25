$(document).ready(function() { 

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

    //Button Click function to add train data
   $("#submitButton").on("click", function(event) {
    event.preventDefault();


      // Values from the text boxes
            var trainName = $("#trainNameInput").val().trim();
            var destination = $("#destinationInput").val().trim();
            var firstTrainTime = moment($("#firstTrainTimeInput").val().trim(), "hh:mm").format("LT");
            var frequency = $("#frequencyInput").val().trim();
            // var nextArrival = moment($("#firstTrainTimeInput").val().trim()).format("hh:mm:ss");
            // var minutesAway = $('minutesAway').val().trim();

            // console.log(trainName);
            // console.log(destination);
            // console.log(firstTrainTime);
            // console.log(frequency);
            // console.log(nextArrival);
            // console.log(minutesAway);

  // creating a local object that will be pushed to firebase
           var newTrain = {
              trainName: trainName,
              destination: destination,
              firstTrainTime: firstTrainTime,
              frequency: frequency  
            };
        

          //  console.log(newTrain);
           //upload to database/firebase
           database.ref().push(newTrain);

           //log to console
           console.log(newTrain.trainName);
           console.log(newTrain.destination);
           console.log(newTrain.firstTrainTime);
           console.log(newTrain.frequency);

           alert("Train added!");

           //clear text boxes
           $("#trainNameInput").val("");
           $("#destinationInput").val("");
           $("#firstTrainTimeInput").val("");
           $("#frequencyInput").val("");

          });

          database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val());

            //store everything in variable
            var trainName = childSnapshot.val().trainName;
            var destination = childSnapshot.val().destination;
            var firstTrainTime = childSnapshot.val().firstTrainTime;
            var frequency = childSnapshot.val().frequency;

            //Train info
            console.log(trainName);
            console.log(destination);
            console.log(firstTrainTime);
            console.log(frequency);

            //getting data for next arrival and minutes away
            //Calculate the Next Arrival
            var nextArrival = moment().endOf("HH:MM").fromNow(firstTrainTime);
            console.log(nextArrival);

            //Calculate the Minutes Away
            var minutesAway = moment().startOf("HH:MM").fromNow(frequency);
            console.log(minutesAway); 

            //Create new rows of data in html
            var newData = $("<tr>").prepend(
              $("<td>").text(trainName),
              $("<td>").text(destination),
              $("<td>").text(frequency),
              $("<td>").text(nextArrival),
              $("<td>").text(minutesAway)
            );
              $("#trainTable").prepend(newData);
            //Append the new row to the data table
        
          });

        });
         

           
         
        



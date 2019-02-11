
//Lets Begin


$(document).ready(function () {

  //creating all the variables I will need

  var wins = 0;

  var losses = 0;

  var totalScore = 0;

  var targetNumber = Math.floor(Math.random() * 101 + 19)

  //writing all initial values to page

  $("#target-number").text(targetNumber);
  $("#total-score").text(totalScore);
  $("#wins").text(wins);
  $("#losses").text(losses);

  //creating variables for each button and console.log their value
  
  var numberOptionOne = Math.floor(Math.random() * 11 + 1)
  console.log(numberOptionOne);

  var numberOptionTwo = Math.floor(Math.random() * 11 + 1)
  console.log(numberOptionTwo);

  var numberOptionThree = Math.floor(Math.random() * 11 + 1)
  console.log(numberOptionThree);

  var numberOptionFour = Math.floor(Math.random() * 11 + 1)
  console.log(numberOptionFour);

  //adding button values to total score and printing to page
  
  $("#button-1").on("click", function () {
    totalScore = numberOptionOne + totalScore;
    $("#total-score").text(totalScore);

    //if the user wins:

    if (totalScore === targetNumber) {
      //add 1 to wins variable
      wins = wins + 1;
      //write wins value to page
      $("#wins").text(wins);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
  }

    //if the user losses:
    if (totalScore > targetNumber) {
      //add 1 to losses variable
      losses = losses + 1;
      //write losses value to page
      $("#losses").text(losses);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
    }
  })

  //adding button values to total score and printing to page

  $("#button-2").on("click", function () {
    totalScore = numberOptionTwo + totalScore;
    $("#total-score").text(totalScore);
    
    //if the user wins:

    if (totalScore === targetNumber) {
      //add 1 to wins variable
      wins = wins + 1;
      //write wins value to page
      $("#wins").text(wins);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
  }

    //if the user losses:
    if (totalScore > targetNumber) {
      //add 1 to losses variable
      losses = losses + 1;
      //write losses value to page
      $("#losses").text(losses);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
    }

  })

  //adding button values to total score and printing to page

  $("#button-3").on("click", function () {
    totalScore = numberOptionThree + totalScore;
    $("#total-score").text(totalScore);
    
    //if the user wins:

    if (totalScore === targetNumber) {
      //add 1 to wins variable
      wins = wins + 1;
      //write wins value to page
      $("#wins").text(wins);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
  }

    //if the user losses:
    if (totalScore > targetNumber) {
      //add 1 to losses variable
      losses = losses + 1;
      //write losses value to page
      $("#losses").text(losses);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
    }
  })

  //adding button values to total score and printing to page

  $("#button-4").on("click", function () {
    totalScore = numberOptionFour + totalScore;
    $("#total-score").text(totalScore);
    
    //if the user wins:

    if (totalScore === targetNumber) {
      //add 1 to wins variable
      wins = wins + 1;
      //write wins value to page
      $("#wins").text(wins);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
  }

    //if the user losses:
    if (totalScore > targetNumber) {
      //add 1 to losses variable
      losses = losses + 1;
      //write losses value to page
      $("#losses").text(losses);
      //reset total score to 0
      totalScore = 0;
      //write total score's new value of 0 to page
      $("#total-score").text(totalScore);
      //create a new target number between 19 and 120
      targetNumber = Math.floor(Math.random() * 101 + 19);
      //write the new target number to page
      $("#target-number").text(targetNumber);
      //create new value for crytal #1 between 1 and 12
      numberOptionOne = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionOne);
      //create new value for crytal #2 between 1 and 12
      numberOptionTwo = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionTwo);
      //create new value for crytal #3 between 1 and 12
      numberOptionThree = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionThree);
      //create new value for crytal #4 between 1 and 12
      numberOptionFour = Math.floor(Math.random() * 11 + 1)
      //console.log the value
      console.log(numberOptionFour);
    }
  })




})
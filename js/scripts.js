$(document).ready(function() {
  $("#animal-selector").submit(function(event){
    const animalChoice = $("#animal-choice").val();
    event.preventDefault();

    if (animalChoice==="tiger") {
      $("#tiger-display").show();
      $("#chimpanzee-display").hide();
      $("#elephant-display").hide();
    } else if (animalChoice==="chimpanzee") {
      $("#chimpanzee-display").show();
      $("#tiger-display").hide();
      $("#elephant-display").hide();
    } else {
      $("#elephant-display").show();
      $("#chimpanzee-display").hide();
      $("#tiger-display").hide();}
  })
});
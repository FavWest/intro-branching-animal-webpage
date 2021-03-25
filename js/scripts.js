$(document).ready(function() {
  $("#animal-selector").submit(function(event){
    const animalChoice = $("#animal-choice").val();
    event.preventDefault();

    if (animalChoice==="tiger") {
      $("#tiger-picture").show();
      $("#chimpanzee-picture").hide();
      $("#elephant-picture").hide();
    } else if (animalChoice==="chimpanzee") {
      $("#chimpanzee-picture").show();
      $("#tiger-picture").hide();
      $("#elephant-picture").hide();
    } else {
      $("#elephant-picture").show();
      $("#chimpanzee-picture").hide();
      $("#tiger-picture").hide();}
  })
});
$(document).ready(function() {
  $( ".form-control" ).change(function() {
  var animalInput = $(".form-control").val();

$(".animal-container").hide();

  if (animalInput === "dragon"){
    $("#dragon").show();
  } else if(animalInput === "unicorn"){
    $("#unicorn").show();
  } else if(animalInput === "sphinx"){
    $("#sphinx").show();
  } else if(animalInput === "mouse"){
    $("#mouse").show();
  }





});





});

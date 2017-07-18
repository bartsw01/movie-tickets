//Business Logic
function toCost (x, y, z){

  var userMovie = "";
  var matCost = 10;
  var regCost = 20;
  var premCost = regCost + 10;
  var userAge = "";
  var output = "";

  if (x === "dunkirk"){
    output = premCost;
  } else if (y < 16) {
    output = matCost;
  } else if (y >= 16){
    output = regCost;

  } else {
    alert("Complete all fields before submitting");
  };
  return output;
  alert (output);
};


//UI Logic
$(document).ready(function(){
  $("form#movie-form").submit(function(event){
    event.preventDefault();
    var userMovie = $("#movie").val();
    var userTime = $("#time").val();
    var userAge = $("#age").val();

    var output = toCost(userMovie, userTime, userAge);
  alert (userMovie);
  // alert (output);

    $(".movie-name").text(userMovie);
    $(".movie-time").text(userTime);
    $(".movie-price").text(output);
    $("#show-movie").show();




      // $(".movie-price").text(userPrice);

    // var userSelect = toCost(userMovie,userTime,userAge);
    // $("#result").text(output);


  });
});

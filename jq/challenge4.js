$(document).ready(function(){
  $("form").submit(function(event){
    var fullname = $("#fullname").val();
    var address = $("#streetaddr").val();
    var input = true;
    console.log(name);

    if (fullname == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      input = false;
    }
    else{
      $("#nameerrormsg").css("display", "none");
    }

    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      input = false;
    }
    else{
      $("#addrerrormsg").css("display", "none");
    }

    return input;
  })
})







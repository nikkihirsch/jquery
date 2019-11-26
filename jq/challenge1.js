$("#subscribe").click(function(){
  // this is talking about subscribe
  var x = $("#emailField");
  if (this.checked){
  	console.log("selected");
    x.css("display", "block");  
  }
  else{
  	console.log("not selected");
    x.css("display", "none");
  }


})




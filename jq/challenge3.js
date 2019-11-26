$(document).ready(function(){
    $("form").submit(function(event) {
        var fruit = $('input[name="fruit"]');
        var standing = $('input[name="standing"]');
        var input = false;
        
        
        if (fruit.is(":checked")){
            console.log("checked fruit");
            input = true;
        }
       else{
            alert("You must pick a fruit!");
            event.preventDefault();
    }

    return input;   
        
    })

})


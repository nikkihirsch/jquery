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
        if (standing.is(":checked")){
            console.log("checked standing");
            input = true;
        }
        else{
            alert("You must pick a class standing!");
            event.preventDefault();
        }

    return input;   
        
    })

})

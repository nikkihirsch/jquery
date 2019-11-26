$("#useBilling").click(function(){
	var home = $("#home")
	var billing = $("#billing")

	if (this.checked){
		// makes home value the same as billing
		home.val(billing.val());
		home.prop("disabled", true);
		console.log(home.val());
	} 

	else{
		home.val('');
		home.prop("disabled", false);
	}
})


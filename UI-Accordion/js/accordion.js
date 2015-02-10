
$(document).ready(function(){
	$(".tab-field").hide(); 
	//$(".accordion-group").ready(function(){
		$(".accordion-toggle").click(function(){
			var tabid = "#"+this.id;
			var  divid = "#"+this.id +"f";
			var iconid = "#"+this.id +"i";
			if($(divid).is(":visible")){
				$(divid).delay(300).slideUp(1000);
				$(iconid).addClass('rotate-reset');
				$(tabid).addClass('close-tab');
				$(iconid).removeClass('rotate');
				$(tabid).removeClass('open-tab');

			} else {
				$(".tab-field").delay(300).slideUp(1000);
				$(".fa-angle-down").removeClass('rotate');
				$(".fa-angle-down").addClass('rotate-reset');
				$(".tab").removeClass('open-tab');
				$(".tab").addClass('close-tab');
				$(divid).slideDown(1000);
				$(iconid).removeClass('rotate-reset');
				$(tabid).removeClass('close-tab');
				$(iconid).addClass('rotate');
				$(tabid).addClass('open-tab');
			}	
		});
	//}); 				  
});





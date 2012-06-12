(function($){
	

$(document).ready(function(){
	$('#authenticate').submit(function(){
		window.location = '#home';
		return false;
	});
	$('#create-new-plan').submit(function(){
		window.location = '#create-2';
		return false;
	});

});

})(jQuery);
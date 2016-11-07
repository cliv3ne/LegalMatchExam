(function($){	
	var availableTags = [
      "Nowheresville, XX 00000",
      "Nowheresville, XX 00001",
      "Nowheresville, XX 00002"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

    $('.selectpicker').on('change', function(){
    	$('#step-3').modal({
            show: true
      });
    })
    $('#client-review').modal({
        show: true
    });
})(jQuery);



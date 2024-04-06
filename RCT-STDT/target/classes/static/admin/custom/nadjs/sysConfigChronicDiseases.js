//----------------------------- KNG NAD Chronic Diseases Lens button click START----------------------------------

 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(nadchronic,status)
						{
			       			$('#idEdit').val(nadchronic.id);
			        		$('#chroniceEdit').val(nadchronic.chronice);
			        		$('#chronicaEdit').val(nadchronic.chronica);
			       			$('#statEdit').val(nadchronic.stat);
			        	}
					);
			        $('#editChronicDiseaseModal').modal();
			    }); 
});
//----------------------------- KNG NAD Chronic Diseases Lens button click END----------------------------------
 
//----------------------------- KNG NAD Chronic Diseases  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD Chronic Diseases Lens->Delete button END----------------------------------
 
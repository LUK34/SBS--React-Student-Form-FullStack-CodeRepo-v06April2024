//----------------------------- KNG NAD Consultations Lens button click START----------------------------------

 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(cons,status)
						{
			       			$('#idEdit').val(cons.id);
			        		$('#Edit').val(cons.fcode);
			        		$('#Edit').val(cons.foodtype);
			       			$('#Edit').val(cons.portions);
			       			$('#Edit').val(cons.measurement);
			        		$('#Edit').val(cons.calories);
			        		$('#Edit').val(cons.carbohydrates);
			        		$('#Edit').val(cons.fat);
			        		$('#Edit').val(cons.protein);  	
			        		$('#Edit').val(cons.fiber); 
			        		$('#Edit').val(cons.sodium); 
			        		$('#Edit').val(cons.stat);
			        	}
					);
			        $('#editModal').modal();
			    }); 
});
//----------------------------- KNG NAD Consultations Lens button click END----------------------------------
 
//----------------------------- KNG NAD Consultations  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD Consultations Lens->Delete button END----------------------------------
 
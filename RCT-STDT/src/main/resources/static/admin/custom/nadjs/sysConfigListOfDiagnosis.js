//----------------------------- KNG NAD Consultations Lens button click START----------------------------------

 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(naddiag,status)
						{
			       			$('#idEdit').val(naddiag.id);
			        		$('#diagEdit').val(naddiag.diag);
			        		$('#diagaEdit').val(naddiag.diaga);
			       			$('#statEdit').val(naddiag.stat);
			        	}
					);
			        $('#editListOfDiagnosisModal').modal();
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
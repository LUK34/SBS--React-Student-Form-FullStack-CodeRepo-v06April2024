// ----------------------------- KNG NAD One Page MPT Data table Code Lens button START----------------------------------
 
 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(ompt,status)
						{
			       			$('#idEdit').val(ompt.id);
			        		$('#tidEdit').val(ompt.tid);
			        		$('#daysEdit').val(ompt.days);
			       			$('#breakfastEdit').val(ompt.breakfast);
			       			$('#snack1Edit').val(ompt.snack1);
			        		$('#lunchEdit').val(ompt.lunch);
			       			$('#snack2Edit').val(ompt.snack2);
			       			$('#dinnerEdit').val(ompt.dinner);
			        	}
					);
			        $('#editOnePageMPTModal').modal();
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
 
 
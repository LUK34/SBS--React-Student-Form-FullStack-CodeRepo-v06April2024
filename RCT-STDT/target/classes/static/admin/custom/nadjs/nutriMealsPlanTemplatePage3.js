 //----------------------------- KNG NAD Meal Plan Template Lens button click START----------------------------------

 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(mpt,status)
						{
			       			$('#Edit').val(mpt.tplName);
			        		$('#Edit').val(mpt.fcode);
			        		$('#Edit').val(mpt.mpttype);
			       			$('#Edit').val(mpt.portions);
			       			$('#Edit').val(mpt.measurement);
			        		$('#Edit').val(mpt.calories);
			        		$('#Edit').val(mpt.tplTEn);
			        		$('#Edit').val(mpt.tplTFa);
			        		$('#Edit').val(mpt.tplTPr);  	
			        		$('#Edit').val(mpt.tplTCarb); 
			        		$('#Edit').val(mpt.tplTFib); 
			        		$('#Edit').val(mpt.tplTSod); 
			        		$('#Edit').val(mpt.tplObj);       				        		
			        	}
					);
			        $('#editMPTModal').modal();
			    }); 
});
//----------------------------- KNG NAD Meal Plan Template Lens button click END----------------------------------
 
//----------------------------- KNG NAD Meal Plan Template  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD Meal Plan Template Lens->Delete button END----------------------------------
 
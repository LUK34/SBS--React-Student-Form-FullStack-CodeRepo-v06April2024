//----------------------------- KNG NAD Consultations Lens button click START----------------------------------

 $('document').ready(function()
{
	 //$('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(nadclinic,status)
						{
			       			$('#idEdit').val(nadclinic.id);
			        		$('#clinicidEdit').val(nadclinic.clinicid);
			        		$('#cnameEdit').val(nadclinic.cname);
			       			$('#cnameaEdit').val(nadclinic.cnamea);
			       			$('#statEdit').val(nadclinic.stat);
			        	}
					);
			        $('#editNadKngClinicModal').modal();
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
 
//----------------------------- KNG NAD Consultations Lens button click START----------------------------------

 $('document').ready(function()
{
	// $('table #editButton').on('click',function(event)
			 $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(appuser,status)
						{
			       			$('#idEdit').val(appuser.id);
			        		$('#nameEdit').val(appuser.name);
			        		$('#nameArEdit').val(appuser.nameAr);
			       			$('#crdateEdit').val(appuser.crdate);
			       			$('#usridEdit').val(appuser.usrid);
			        		$('#passwdEdit').val(appuser.passwd);
			        		$('#typeEdit').val(appuser.type);
			       			$('#statEdit').val(appuser.stat);
			       			$('#scodeEdit').val(appuser.scode);
			        	}
					);
			        $('#editAppUserModal').modal();
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
 
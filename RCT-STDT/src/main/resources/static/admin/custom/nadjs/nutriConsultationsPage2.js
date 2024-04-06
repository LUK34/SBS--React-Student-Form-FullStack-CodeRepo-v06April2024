//window.onload = function() {
    // Trigger the click event on the first tab once the page is loaded
  //  document.querySelector(".nav-link.active").click();
//};

//----------------------------------------------- CALENDER START--------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });
//----------------------------------------------- CALENDER END--------------------------------------------
 

 
 //----------------------------- KNG NAD Personal and Social History START----------------------------------

  $('document').ready(function()
{
	//$('table #editButton').on('click',function(event)
	  $(document).on('click', 'div .editPSHButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(clinic,status)
						{
			       			//$('#idEdit').val(clinic.id);
			        		//$('#clinicidEdit').val(clinic.clinicid);
			        		//$('#cnameEdit').val(clinic.cname);
			       			//$('#cnameaEdit').val(clinic.cnamea);
			       			//$('#statEdit').val(clinic.stat); 	
			        	}
					);
			        $('#editPSHModal').modal();
			    }); 
});
 //----------------------------- KNG NAD Personal and Social History END----------------------------------
 
 //----------------------------- KNG NAD Dietary History START----------------------------------

  $('document').ready(function()
{
	//$('table #editButton').on('click',function(event)
	  $(document).on('click', 'div .editDHButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(clinic,status)
						{
			       			//$('#idEdit').val(clinic.id);
			        		//$('#clinicidEdit').val(clinic.clinicid);
			        		//$('#cnameEdit').val(clinic.cname);
			       			//$('#cnameaEdit').val(clinic.cnamea);
			       			//$('#statEdit').val(clinic.stat); 	
			        	}
					);
			        $('#editDHModal').modal();
			    }); 
});
 //----------------------------- KNG NAD Dietary History END----------------------------------
 
 
 
  //----------------------------- KNG NAD Other Recommendations START----------------------------------

  $('document').ready(function()
{
	//$('table #editButton').on('click',function(event)
	  $(document).on('click', 'div .editORButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(clinic,status)
						{
			       			//$('#idEdit').val(clinic.id);
			        		//$('#clinicidEdit').val(clinic.clinicid);
			        		//$('#cnameEdit').val(clinic.cname);
			       			//$('#cnameaEdit').val(clinic.cnamea);
			       			//$('#statEdit').val(clinic.stat); 	
			        	}
					);
			        $('#editORButton').modal();
			    }); 
});
 //----------------------------- KNG NAD Other Recommendations END----------------------------------
 

//----------------------------- KNG NAD Consultations  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD Consultations Lens->Delete button END----------------------------------
 
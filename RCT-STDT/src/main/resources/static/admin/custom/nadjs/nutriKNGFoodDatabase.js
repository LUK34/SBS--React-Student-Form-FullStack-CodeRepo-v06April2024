//----------------------------- KNG NAD Food Dictionary  Lens button click START----------------------------------

 $('document').ready(function()
{
	// $('table #editButton').on('click',function(event)
	   $(document).on('click', 'table .editButton', function(event)
			   {
			        event.preventDefault();
			        var href= $(this).attr('href');
			        $.get(href, function(food,status)
						{
			       			$('#idEdit').val(food.id);
			       			$('#fcodeEdit').val(food.fcode);
			        		$('#foodnameEdit').val(food.foodname);
			        		$('#foodtypeEdit').val(food.foodtype);
			       			$('#portionsEdit').val(food.portions);
			       			$('#measurementEdit').val(food.measurement);
			        		$('#caloriesEdit').val(food.calories);
			        		$('#carbohydratesEdit').val(food.carbohydrates);
			        		$('#fatEdit').val(food.fat);
			        		$('#proteinEdit').val(food.protein);  	
			        		$('#fiberEdit').val(food.fiber); 
			        		$('#sodiumEdit').val(food.sodium); 
			        		$('#statEdit').val(food.stat);
			        	}
					);
			        $('#editKNGFoodModal').modal();
			    }); 
});
//----------------------------- KNG NAD Food Dictionary  Lens button click END----------------------------------
 
//----------------------------- KNG NAD Food Dictionary  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD Food Dictionary  Lens->Delete button END----------------------------------
 
//----------------------------- KNG NAD ACTIVE Patient Open Window Logic START----------------------------------

function openWindow(url)
{
	var popupwindow=window.open(url,'','location=no,width=1500,height=900');
	
	popupwindow.moveTo((screen.width/2)-700,(screen.height/2)-450);
	
}
//----------------------------- KNG NAD ACTIVE Patient Open Window Logic END----------------------------------

 
 
//----------------------------- KNG NAD ACTIVE Patient Data  Lens->Delete button START----------------------------------

$('button #deleteButton').on('click',function(event)
	{
    		event.preventDefault();
    		var href=$(this).attr('href');
			 $('#confirmDeleteButton').attr('href',href);
    		$('#deleteModal').modal();
	});	

//----------------------------- KNG NAD ACTIVE Patient Data Lens->Delete button END----------------------------------
 
 
 //----------------------------- KNG NAD FETCH Patient MEASUREMENT RECORD DYNAMICALLY START----------------------------------


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.patient-row').forEach(row => {
        row.addEventListener('click', function() {
            const patientId = this.getAttribute('data-patientid');
            fetchPatientMeasurementsRecord(patientId);
            fetchPatientTreatmentsRecord(patientId);
        });
    });
});



function fetchPatientMeasurementsRecord(patientId) {
    fetch('/patientData/findPtMsr?patientid=' + patientId)
        .then(response => response.text())
        .then(html => {
            document.getElementById('patientMeasurementsContainer').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

function fetchPatientTreatmentsRecord(patientId) {
    fetch('/patientData/findPtTrmt?patientid=' + patientId)
        .then(response => response.text())
        .then(html => {
            document.getElementById('patientTreatmentsContainer').innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}




//----------------------------- KNG NAD FETCH Patient MEASUREMENT RECORD DYNAMICALLY END----------------------------------


 
 
 
 
 
 
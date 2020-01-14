function getCountdown(){
 var  finaldate = new Date('Feb 2, 2020 23:59:59').getTime(); 
 var today = new Date().getTime();
 var current_time_dif = finaldate - today;

 var left_days =  Math.floor(current_time_dif / (1000 * 60 * 60 * 24)); 
 var left_hours = Math.floor((current_time_dif % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
 var left_minutes =Math.floor((current_time_dif % (1000 * 60 * 60)) / (1000 * 60)); 
 var left_seconds = Math.floor((current_time_dif % (1000 * 60)) / 1000); 
document.getElementById("l-day").innerHTML = left_days;
document.getElementById("l-hour").innerHTML = left_hours;
document.getElementById("l-min").innerHTML = left_minutes;
document.getElementById("l-sec").innerHTML = left_seconds;
}

function resetRForm(formid){
	$(".error-form").remove();
	$('#' + formid).trigger("reset");
}
function registrationValidation(){
	 var first_name = $('#inputFirstName').val();
   var last_name = $('#inputLastName').val();
    var school = $('#inputSchool').val();
   var email = $('#inputEmail').val();
   var tell = $('#inputTelephone').val();
    var school_class = $('#inputSchoolClass').val(); 
   var error = 0;
   
	$(".error-form").remove();
 
    if (first_name.length < 2) {
      $('#inputFirstName').after('<span class="error-form">! Vase ime treba da sadrzi najmanje dva slova</span>');
	  error  = 1;
    }else{
		var regEx = /^[0-9]+$/;
		var notValidName = regEx.test(first_name);
		if(notValidName){
			$('#inputFirstName').after('<span class="error-form">! Vase ime ne moze da sadrzi samo brojeve</span>');
		}
	}
    if (last_name.length < 2) {
       $('#inputLastName').after('<span class="error-form">! Vase prezime treba da sadrzi najmanje dva slova</span>');
	    error  = 1;
    }else{
		var regEx = /^[0-9]+$/;
		var notValidName = regEx.test(last_name);
		if(notValidName){
			$('#inputLastName').after('<span class="error-form">! Vase ime ne moze da sadrzi samo brojeve</span>');
		}
	}
	if (school.length < 6) {
       $('#inputSchool').after('<span class="error-form">! Navedite tacan naziv vase skole</span>');
	    error  = 1;
    }else{
		var regEx = /^[0-9]+$/;
		var notValidSchool = regEx.test(school);
		if(notValidSchool){
			$('#inputSchool').after('<span class="error-form">! Ime vase skole ne moze da sadrzi samo brojeve</span>');
			 error  = 1;
		}
	}
	//select 
	if (school_class  == '') {
       $('#inputSchoolClass').after('<span class="error-form">! Selektuj razred</span>');
	    error  = 1;
    }
  if($(':radio[name="gender"]').is(':checked')){		 
  }else{	
       $('#inputGender').after('<div class="error-form"> ! Selektujte vas pol</div>');
	    error  = 1;	   
   }	
  
   if (email.length < 4) {
      $('#inputEmail').after('<span class="error-form">! Unesite tacnu email adresu</span>');
	   error  = 1;
    } else {
     /* var regEx = /^w.+@[a-zA-Z_-]+?.[a-zA-Z]{2,3}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#inputEmail').after('<span class="error-form">Unesite tacnu email adresu</span>');
		 error  = 1;
      }*/
    }
	 if (tell.length < 4) {
      $('#inputTelephone').after('<span class="error-form">! Unesite broj telefona</span>');
	   error  = 1;
    } else {
      var regEx = /^[0-9]+$/;
      var validTelephone = regEx.test(tell);
      if (!validTelephone) {
        $('#inputTelephone').after('<span class="error-form">! Unesite tacan broj telefona</span>');
		 error  = 1;
      }
    }
	
	if ($("input[name='course']:checked").length <=0 ){
		 $('#idCourse').after('<div class="error-form">! Selektujte bar jedno predavanje </div>');
		error  = 1;
	}
	return error;
}
function checkValidRegDate(){
	var today = new Date().getTime(); 
       var lastday = new Date('Feb 3, 2020').getTime();
	    if(today > lastday ){
			 $('h1').after('<div class="error-form" style="font-size:16px;">! Na zalost, vreme za registraciju je isteklo </div>');
			 return false;
		}else{
			return true;
		}
}

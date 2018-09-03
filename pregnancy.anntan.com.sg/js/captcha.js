/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function isNumberKey(evt) {
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                // Added to allow decimal, period, or delete
                if (charCode == 110 || charCode == 190 || charCode == 46) 
                        return true;

                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                        return false;
                    }

                        return true;
} 
                
                
function validateEmail(mail){  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
                          return true;
                        }  
                            return false; 
}

//Toggle Captcha
var isGoogleCaptcha = 0;

var pass=false;
var count=0;
var gothru = true;
var recaptcha1 = null;
var domain = window.location.host;

jQuery(document).ready(function() {
     if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
      }
    var finalurl = window.location.origin;
    var domain = window.location.host;
    if(domain=="localhost"){
              partfile="";
        }else if(domain=="activawebdesigner.com.sg"){
            partfile="/wffc/";
        }else{
            partfile= "/";
        }
        
          finalurl =  finalurl + partfile;
     //Here the website Sitekey needs to be inserted
     
     function sendForm(getidDiv){
        pass=true;
        ++count;
        if(count==1){
              gothru=false;
              setTimeout(function(){  $("#submitBtn" + getidDiv).trigger('click'); }, 2000);
        }
     }
     
     
     function validateCaptchaCode(captchadata,getidDiv){
                    var serializedData = "";
					var captchaFolder = (getidDiv==1) ? "captcha" : "captcha2";
                    var ajaxurl = finalurl +  captchaFolder + "/getcaptcha.php";
					
                            if(isGoogleCaptcha){
                                    serializedData = jQuery("#form" + getidDiv).serialize();
                                   ajaxurl = finalurl + captchaFolder +"/validation.php";
                            }    
							
						                               
                                        jQuery.ajax({
                                        url: ajaxurl,
                                        type: "post",
                                        dataType: (isGoogleCaptcha) ? "" : "json",
                                        data: serializedData,
                                        beforeSend: function() {
                                            // setting a timeout
                                         },
                                        success:function(data){
                                           var data1 = data.toString();
                                           if(data1 === "true" && isGoogleCaptcha){
                                                 sendForm();
                                           }else if((captchadata === data1) && !isGoogleCaptcha){
                                                 sendForm(getidDiv);
                                           }else{
                                               if(gothru){
                                                    alert("Please check the captcha");
                                                    return pass;
                                                }
                                            }
                                        }, error: function(jqXHR, textStatus, ex) { }
                                    });

                                 return pass;
                   }
    
	
						
			
    
                    jQuery("input[id^=submitBtn]").on('click',function(){
						var $getId = $(this).attr("id").replace ( /[^\d.]/g, '' );
				
                            if(jQuery("#name" + $getId).val()==""){
                              alert("Please enter you Name");
                                return pass;
                           }else if(jQuery("#mobile" + $getId).val()==""){
                                alert("Please enter you Contact Number");
                                 return pass;
                           /*}else if(jQuery("#email" + $getId).val()==""){
                                 alert("Please enter you Email Address");
                                 return pass;
                           }else if(!validateEmail(jQuery("#email" + $getId).val())){
                                  alert("Please enter a valid Email Address");
                                  return pass;*/
                           }else{
							   
                               var inputparam = (jQuery("#contactcaptcha" + $getId).length > 0) ? jQuery("#contactcaptcha" + $getId).val() : ""; 
                              validateCaptchaCode(inputparam,$getId);
                              return pass;
                           }
                       });
					   
		function generateCaptcha(url, boolgetOne){
			
					var captchaFolder = (boolgetOne==1||2) ? "captcha" : "captcha2";
			         var captchaURL =  url + captchaFolder + "/CaptchaSecurityImages.php?width=140&amp;height=35&amp;characters=6";
					
					  var refreshButtonImage = url + "captcha/refresh-button.png";
					  var rand =  Math.random();
					  var captchHolder = "";
					  
					   captchHolder += "<input id=\"contactcaptcha"+ boolgetOne +"\" class=\"Security Code contact-input contact-security\" name=\"Captcha\" size=\"32\" type=\"text\" value=\"\" placeholder=\"Security Code* :\">";
					   
					  captchHolder += "<img id=\"captchaImage" + boolgetOne + "\"  class=\"contact-captcha\" src=\"" + captchaURL + "\">";
					  captchHolder += "<a title=\"Refresh Image\" class=\"contact-refresh\" onclick=\"document.getElementById('captchaImage" + boolgetOne + "').src = \'" + captchaURL + "&amp;sid=" + rand + "; this.blur();  return false;'\" >";
					  captchHolder += "<img onclick=\"this.blur() alt=\"Reload Image\" src=\"" + refreshButtonImage + "\" id=\"refreshBtn"+ boolgetOne + "\" style=\"cursor: pointer; border-style: none; border: 0px;\"></a>";
					 return captchHolder;
		}
					   
					   
        if(!isGoogleCaptcha){  
         
          setTimeout(function(){  
		     jQuery("div#captchadiv1").html(generateCaptcha(finalurl , 1)); 
		    jQuery("div#captchadiv2").html(generateCaptcha(finalurl , 2)); 
		   }, 600);
      }
	  	
});

         
 if(isGoogleCaptcha){
var captchaSitekey = "6LcuQyITAAAAAPT0FqH9qs8JxLqWVt8iVSET2hJJ";
if(domain=="activawebdesigner.com.sg"){
      captchaSitekey = "6LcRASATAAAAAPhOS_dGsoICuloNLnl0Uk2QJ1T_";
 }
     var captchaCallback = function() {
     //Render the recaptcha1 on the element with ID "recaptcha1"
        recaptcha1 = grecaptcha.render('captchadiv', {
          'sitekey' : captchaSitekey, //Replace this with your Site key
          'theme' : 'light'
        });

    }
 } 

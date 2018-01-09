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
//
//        
//        
//             $.fn.pval = function(){
//                    var $this = $(this),
//                        val = $this.eq(0).val();
//                    if(val == $this.attr('placeholder'))
//                        return '';
//                    else
//                        return val;
//                }
                
                 function validateEmail(mail){  
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {  
                          return true;
                        }
                            return false; 
                        }
            var pass=false;
            var count=0;
            
                
            $(document).ready(function(){
                 // Initialize placeholder
                //$.Placeholder.init();
              


                function validateaCaptcha(acaptchadata){
                    $.ajax({
                        url : "http://www.anntan.com.sg/captcha/getcaptcha.php",
                        dataType:"jsonp",
						crossDomain: true,
                        jsonp:"mycallback",
                        //beforeSend: function() {
//                                // setting a timeout
//                                 $('#foo').spin('modal');
//                            },
                        success:function(data){
							setTimeout(function(){  
							     if(acaptchadata!==data.acaptcha){
                                   alert("Please enter a valid Captcha Code");
                                   //$('#foo').spin('modal').stop();
                                   return pass;
                                        }else{
                                         pass=true;
                                         //$('#foo').spin('modal'); 
                                         
                                         ++count;
                                         if(count==1){
                                             //$('#foo').spin('modal'); 
                                            setTimeout(function(){  $("#submitbtn").trigger('click');  }, 300);
                                        }
                                }
							}, 1000);
                          
                        }, error: function(jqXHR, textStatus, ex) {
                                    alert(textStatus + "," + ex + "," + jqXHR.responseText);
                        }
                    });
                    return true;
                }
    
                   
                
                
                $("#submitbtn").click(function(){
                      
                        if($("#aname").val()==""){
                           alert("Please enter your Name");
                             return pass;
                        }else if($("#amobile").val()==""){
                             alert("Please enter your Contact No");
                              return pass;
                        }else if($("#aemail").val()==""){
                              alert("Please enter your Email Address");
                              return pass;
                        }else if(!validateEmail($("#aemail").val())){
                              alert("Please enter a valid Email Address!") 
                               return pass;
                        }else if($("#acaptcha").val()=="" || $("#acaptcha").val()=="Security Code"){
                            alert("Please enter the Security code") 
                             return pass;
                        }else{
                            validateCaptcha($("#acaptcha").val());
                            return pass;
                        }
                    });
                
                
                $("#amobile").on({
                    keydown: function(e) {
                      if (e.which === 32)
                        return false;
                    },
                    change: function() {
                      this.value = this.value.replace(/\s/g, "");
                    }
                  });
                
                
                 //function showErrorToast(msg) {
//                    $(this).notifyMe(
//				'bottom',
//				'error',
//				'Error :',
//				msg,
//				200,
//				1500
//			);
//                }
      });
            
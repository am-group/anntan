// JavaScript Document
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
            var pass=false;            
            var count=0;
                
            $(document).ready(function(){
                 // Initialize placeholder
                //$.Placeholder.init();

                
                $("#id123-button-send").click(function(){

                        /*if($(".example").is(':checked')){
                            console.log("It is checked");
                          }
                          else{
                          alert("Please check relevant checkbox");
                          return pass;
                           }*/
              

                      
                        if($("#id123-control26906531").val()=="" || $("#id123-control26906531").val()=="Name"){
                           alert("Please enter your Name");
                             return pass;
                        }else if($("#id123-control26906534").val()=="" || $("#id123-control26906534").val()=="Message"){
                             alert("Please enter your Message");
                              return pass;   
                        }else if($("#id123-control26906532").val()=="" || $("#id123-control26906532").val()=="Contact No"){
                             alert("Please enter your Contact No");
                              return pass;
                       
                        }else if(!validateEmail($("#id123-control26906533").val())){
                              alert("Please enter a valid Email Address!") 
                               return pass;                        
                        }else{
                            var captcha_response = grecaptcha.getResponse();
                          if(captcha_response.length == 0)
                          {
                            // Captcha is not Passed
                            alert("Please choose correct Google Captcha");                    
                            return pass;
                          }
                          if(captcha_response.length > 0)
                          {
                            // Captcha is Passed
                            
                            this.submit();
                                          
                          }
                                        
                     }
               });


        });
  
  
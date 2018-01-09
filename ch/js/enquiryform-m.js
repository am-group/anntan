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

                
                $("#id123-button-send-m").click(function(){

                        /*if($(".example").is(':checked')){
                            console.log("It is checked");
                          }
                          else{
                          alert("Please check relevant checkbox");
                          return pass;
                           }*/
              

                      
                        if($("#id123-control26981066").val()=="" || $("#id123-control26981066").val()=="名字"){
                           alert("Please enter your Name");
                             return pass;
                        }else if($("#id123-control26981069").val()=="" || $("#id123-control26981069").val()=="信息"){
                             alert("Please enter your Message");
                              return pass;   
                        }else if($("#id123-control26981067").val()=="" || $("#id123-control26981067").val()=="电话"){
                             alert("Please enter your Contact No");
                              return pass;
                       
                        }else if(!validateEmail($("#id123-control26981068").val())){
                              alert("Please enter a valid Email Address!") 
                               return pass; 

                        }else if($('#spamtrap').val().length != 0){
                              /*alert("Please enter your Contact No");*/
                              return pass;


                        }else{
                            // Captcha is Passed
                            
                            this.submit();                                          
                              
                     }
               });


        });  


           /* $('mainform123-m').submit(function(){    
             if ($('input#honeypot').val().length != 0) {
            return false;
        } 
});*/
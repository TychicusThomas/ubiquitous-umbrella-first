$(document).ready(function () {
    console.log("doc is ready");


    // Refreshes the page to clear the form 
    $("#clear-btn").click(function () {
    
        location.reload(true);
          })
    var el = document.getElementById("submit-btn");

          // click event on submit button
    el.addEventListener("click", displayData);
          
    function displayData() {
      // grab the values of the user input
      var elName = document.getElementById("name-input");
      var elEmail = document.getElementById("email");
      function adoptInt()
        {
          var elAdopt = document.getElementById("adopt-int");
          var adoptOption = elAdopt.options[elAdopt.selectedIndex].text;
          return adoptOption;
          
        }
        function checkCheckbox(){
          var yes=document.getElementById("donate-int");
          if(yes.checked==true){
            $("#form").html(
              `<div class="container-fluid">
                <div row>
                  <div col>
                    <h1 class="offset-5 mt-2">Thank You</h5>
                    <p class="mt-3"> Thank you `+ elName.value +` for your generous donation, this is the first step in helping us grow this platform. Expect to recieve an email at your address <b>`+ elEmail.value +` </b> in the next 2-3 business days 
                  </div>
                </div>
              </div`
            );
          }
          
          else{
            $("#form").html(
              `<div class="container-fluid">
                <div row>
                  <div col>
                    <h1 class="offset-5 mt-2">Thank You</h5>
                    <p class="mt-3"> Thank you `+ elName.value +` for expressing your interest in our organization. Expect to recieve an email at your address <b>`+ elEmail.value +` </b> in the next 2-3 business days 
                    detailing the location of our next meeting! We hope to see you soon, and we can't wait to introduce you to some of our pups. Please note that there will also be an opportunity to make a one time donation 
                    at each of our meetings (should you feel so inclined).
                    Thanks again,</p>
                    <p class="text-end mt-3">---P&P</p>
                  </div>
                </div>
              </div`
            );
          
          }
        }
          
      //shows its working
      console.log("Hello "+elName.value + elEmail.value + adoptInt()+checkCheckbox());
      }
    })
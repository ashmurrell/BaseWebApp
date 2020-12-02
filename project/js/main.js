function submitContact() {

  //clear validation message
  document.getElementById("validationmessagebox").innerHTML = ("");

  //prepare data for POST 
 var data = {
   'fields': [
     {'name': 'firstname',
     'value': $("#first-name").val()},
     {'name': 'lastname',
     'value': $("#last-name").val()},
     {'name': 'email',
     'value': $("#email").val()},
     {'name': 'company',
    'value': $("#company").val()}
   ],

   "context": {
    //"hutk": ':hutk'
    "pageUri": "www.Able.com/landingpage",
    "pageName": "Landingpage"
  },

   "legalConsentOptions": {
     "consent": {
       "consentToProcess": true,
       "text": "I agree to allow Able to store and process my personal data.",
     }
   },

   'skipValidation': false,
 }; 

 //prepare data array for AJAX call
data = JSON.stringify(data)

//the form we want to connect with
var url= "https://api.hsforms.com/submissions/v3/integration/submit/8915946/7c640b86-0464-4120-80c5-d2752203bdea"


$.ajax(url, {
    type: 'POST', //http method
    contentType: 'application/json', //sent as JSON
    data,  // data to submit
    success: function (data, status, response) {
        console.log(status);
        console.log(data);
        console.log(response)
        document.getElementById("validationmessagebox").innerHTML = ("Thanks for submitting your details! You will recieve an email with the eBook shortly.");
        //window.location.href = "/thankyou.ejs";
    },
    error: function (data, status, errors) {
            console.log(status)
            console.log(data)
            console.log(errors)
            document.getElementById("validationmessagebox").innerHTML = ("There was an issue with your details, please check your email again before submitting.");
    }
})
}

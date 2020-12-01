//$(document).ready(function(){
//  $('#contactform').submit(function (e, data) {
   //   console.clear();
  //    e.preventDefault();
 //     submitContact();
//  });
//});

function submitContact() {


 var data = {
   'fields': [
     {'name': 'firstname',
     'value': $("#first-name").val()},
     //'value': "John"},
     {'name': 'lastname',
     'value': $("#last-name").val()},
     //'value': "Tester"},
     {'name': 'email',
     'value': $("#email").val()},
     //'value': "ash.e.murrell@gmail.com"}
   ],
   "legalConsentOptions": {
     "consent": { // Include this object when GDPR options are enabled
       "consentToProcess": true,
       "text": "I agree to allow Able to store and process my personal data.",
       // "communications": [
       //   {
       //     "value": true,
       //     "text": "I agree to receive marketing communications from Example Company."
       //   }
       // ]
     }
   },
   'skipValidation': true,

 }; 

 data = JSON.stringify(data)

 $.ajaxSetup({
  contentType: 'application/json'
});

$.post('https://api.hsforms.com/submissions/v3/integration/submit/8915946/7c640b86-0464-4120-80c5-d2752203bdea', data)
 .then(function (response) {
   console.log(response);
 }) 

}
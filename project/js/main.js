function handleFormSubmit(){

var contactData =

    { firstName: $("#first-name").val(),
    lastName: $("#last-name").val(),
    Email: $("#email").val()
    };
    console.log(firstName);
    console.log(lastName);
    console.log(Email);

  JSON.stringify(contactData);

  submitContact(firstName,lastName,Email);
}


function submitContact(contactData){
  // Create the new request 
  var xhr = new XMLHttpRequest();
  var url = 'https://api.hsforms.com/submissions/v3/integration/submit/8915946/7c640b86-0464-4120-80c5-d2752203bdea'
  
  // Example request JSON:
  var data = {
    //"submittedAt": "1517927174000",
    "fields": [
      {
        "name": "email",
        "value": Email
      },
      {
        "name": "firstname",
        "value": firstName
      },
      {
        "name": "lastname",
        "value": lastName
      }
    ],
    "context": {
      //"hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      "pageUri": "www.example.com/page",
      "pageName": "Example page"
    },
    "legalConsentOptions":{ // Include this object when GDPR options are enabled
      "consent":{
        "consentToProcess":true,
        "text":"I agree to allow Example Company to store and process my personal data.",
        "communications":[
          {
            "value":true,
            "subscriptionTypeId":999,
            "text":"I agree to receive marketing communications from Example Company."
          }
        ]
      }
    }
  }

  var final_data = JSON.stringify(data)

  xhr.open('POST', url);
  // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
      if(xhr.readyState == 4 && xhr.status == 200) { 
          alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400){ 
          alert(xhr.responseText); // Returns a 400 error the submission is rejected.          
      } else if (xhr.readyState == 4 && xhr.status == 403){ 
          alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
      } else if (xhr.readyState == 4 && xhr.status == 404){ 
          alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
      }
     }
  // Sends the request 
  xhr.send(final_data)
}
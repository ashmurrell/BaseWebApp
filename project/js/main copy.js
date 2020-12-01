
//function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  ///$("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
 /// $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
//}

//$(document).ready(function(){
//getWeather();
//})

//function getWeather(searchQuery) {
//var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=metric&appid="+apiKey;
// $(".city").text("")
//  $(".temp").text("")

//  $.ajax(url,{success: function(data){
  //  $(".city").text(data.name);
   // $(".temp").text(data.main.temp);
  //}, error: function(error){
   // $(".error-message").text("An error occured");
  //}})
//}

//function searchWeather() {
  //var searchQuery= $(".search").val();
  //getWeather(searchQuery);
//}



  //API CALL
  //IF ERROR, display error message on about page
  //IF no error, display success message 
  //window.location.reload
//}

//function submitContact(){
  // Create the new request 
  //var xhr = new XMLHttpRequest();
  //var url = 'https://api.hsforms.com/submissions/v3/integration/submit/62515/fcc69886-915b-4fef-b35f-27850ef461e1'
  
  // Example request JSON:
  //var data = {
    //"submittedAt": "1517927174000",
    //"fields": [
      //{
        //"name": "email",
        //"value": "test@testio.com"
      //},
      //{
        //"name": "firstname",
        //"value": "John"
      //},
      //{
        //"name": "lastname",
        //"value": "Farnham"
      //}
    //],
    //"context": {
      //"hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
      //"pageUri": "www.example.com/page",
      //"pageName": "Example page"
    //},
    //"legalConsentOptions":{ // Include this object when GDPR options are enabled
      //"consent":{
        //"consentToProcess":true,
        //"text":"I agree to allow Example Company to store and process my personal data.",
        //"communications":[
          //{
            //"value":true,
            //"subscriptionTypeId":999,
            //"text":"I agree to receive marketing communications from Example Company."
          //}
        //]
      //}
    //}
  //}


function handleFormSubmit(){
  var firstName = $("#first-name").val();
  var lastName = $("#last-name").val();
  var email = $("#email").val();
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  submitContact(firstName,lastName,email);
}

function submitContact(){
  $.ajax(
    url: "https://api.hsforms.com/submissions/v3/integration/submit/8915946/7c640b86-0464-4120-80c5-d2752203bdea",
  type: "POST",
  contentType: "application/json",
  dataType: "json",
  headers: {
  "accept": "application/json",
  "Access-Control-Allow-Origin":"*"
  }
  
  data: JSON.stringify({

  "fields": [
  {
    "name": "email",
    "value": getEmail
  },
    {
    "name": "firstname",
    "value": getName
  }
  ],
  }),

  success: function(result) {
  console.log(result);
  },
  error: function(xhr,status,error) {
  console.log(xhr);
  console.log(status);
  console.log(error);
  }




//set up advanced tracking here?

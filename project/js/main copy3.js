
function submitContact(){

var data = {
  fields: [
    {
      name: "email",
      value: "ash.e.murrell@gmail.com"
    },
    {
      name: "firstname",
      value: "Test"
    },
    {
      name: "lastname",
      value: "Tester"
    },
    {
      name: "subject",
      value: "Testing Subject"
    }
  ]
}

fetch("https://api.hsforms.com/submissions/v3/integration/submit/8915946/7c640b86-0464-4120-80c5-d2752203bdea", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => {
  console.log("Request complete! response:", res);
});
}
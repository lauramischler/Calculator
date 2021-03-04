const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));

//Calculator

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
  let message = "The result is ";
  let result;
  switch (req.body.submit) {
    case "add":
      result = Number(req.body.num1) + Number(req.body.num2);
      break;
    case "divide":
      result = Number(req.body.num1) / Number(req.body.num2);
      break;
    case "subtract":
      result = Number(req.body.num1) - Number(req.body.num2);
      break;
    case "multiply":
      result = Number(req.body.num1) * Number(req.body.num2);
      break;
  }
  res.send(message + result);
});

// BMI Calculator

app.get('/bmicalculator',function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html')
});

app.post('/bmicalculator',function(req, res){

  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  res.send("Your BMI is " + weight/Math.pow(height,2));

})


app.listen(3000);

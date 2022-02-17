import express from 'express'
const app = express()
const PORT = 5000
const request = require('request'); 
var API_KEY = '5337e56560bc910bf077308486a29e33'

app.listen(PORT, ()=> console.log(`Server running on:http://localhost/${PORT}`))

app.get("/api/v1/add", (req, res) => {

  const {country = "", city = ""} = req.query

  console.log(city);
  console.log(API_KEY);

  const forecast = function (city) { 
  
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
    console.log(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`);
    const request = require('request'); 
        request({ url: url, json: true }, function (error, response) { 
            if (error) { 
                console.log('Unable to connect to Forecast API'); 
            } 
              else { 
    
            var tem = response.body.main.temp;
    
            var obj = {"name: temperature" : "value:" + tem }
            var s = JSON.stringify(obj)
            var output = JSON.parse(s)
    
      
                console.log(
                    tem
    
                ); 
             console.log(output);
               return output;
            } 
        }) 
    } 

    forecast(city);
    const output = 2;

    res.status(200).send({
        success: 'true',
        output
    })


})

const fs = require('fs');

const key = fs.readFileSync('./key.pem');

const cert = fs.readFileSync('./cert.pem');

const express = require('express');

const https = require('https');
const axios = require('axios');

const app = express();

const server = https.createServer({key: key, cert: cert }, app);

app.use(express.json());
app.post('/submit', async (req, res) => { 
    console.log(req.body.result);
    let result = await testURL(req.body.result);
    console.log(result)
    let percent= calculateSpamLikelihood( result.BodyisSpam,result.URLisScam);
    let finalJson = {"result":{percentage:percent,URLisScam:result.URLisScam, BodyisSpam:result.BodyisSpam}}
    console.log(finalJson);
    res.send(finalJson);
});

server.listen(3002, () => { console.log('listening on 3001 here') });




async function testURL(str){
    var urlInText = false;
    var urlRegex = /(https?:\/\/[^ ]*)/;

    var input = str;
    console.log(input.match(urlRegex));
    if(input.match(urlRegex)==null){
      urlInText=false;
      var url="";
    }
    else{
        urlInText=true;
        var url = input.match(urlRegex)[1];
    }
    

    const options = {
    method: 'GET',
    url: 'https://exerra-phishing-check.p.rapidapi.com/',
    params: {url: `${url}`},
    headers: {
        'X-RapidAPI-Key': 'b908a3b636msh75c74d7a9bb8ec1p1d9921jsnd8b467f499b0',
        'X-RapidAPI-Host': 'exerra-phishing-check.p.rapidapi.com'
    }
    };


    const options_url = {
        method: 'POST',
        url: 'https://oopspam.p.rapidapi.com/v1/spamdetection',
        headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '1cbbdb29bbmsh7980e239c22a5fep1805bcjsn2ae1cccad968',
        'X-RapidAPI-Host': 'oopspam.p.rapidapi.com'
        },
        data: `{"checkForLength":true,"content":"${str}"}`
    };
    try{
        let urlResult;
        if(urlInText){
            urlResult = await axios.request(options);
        }
        else{
            urlResult= false
        }
        let result = await axios.request(options_url) ;
        //console.log(urlResult.data);
        console.log(result.data);
        if(urlInText){
            var Finalresult = {URLisScam:urlResult.data.data.isScam, BodyisSpam:result.data.Score};
        }
        else{
            var Finalresult = {URLisScam:urlResult, BodyisSpam:result.data.Score};
        }
        
        return Finalresult;
    } catch(e){
        //console.log(e);
        return e;
    }

    }


    function calculateSpamLikelihood(spamScore, isUrlMalicious) {

        // Convert spam score to a percentage (inverted)
        //spamScore = Math.abs(6 - spamScore);
      
        // Set default weights for spam score and URL maliciousness
        let spamWeight = 0.7;
        let urlWeight = 0.3;
      
        // Adjust weights based on specific conditions
        if (spamScore === 0 && !isUrlMalicious) {
          spamWeight = 0;
          urlWeight = 0;
        }
        if (spamScore === 1 && !isUrlMalicious) {
          spamWeight = 5;
          urlWeight = 0.3;
        }
        if (spamScore === 2 && !isUrlMalicious) {
          spamWeight = 5;
          urlWeight = 0.3;
        }
        if (spamScore === 3 && !isUrlMalicious) {
          spamWeight = 4;
          urlWeight = 0.3;
        }
        if (spamScore === 4 && !isUrlMalicious) {
          spamWeight = 4;
          urlWeight = 0.3;
        }
        if (spamScore === 5 && !isUrlMalicious) {
          spamWeight = 4;
          urlWeight = 0;
        }
        if (spamScore === 6 && !isUrlMalicious) {
          spamWeight = 5;
          urlWeight = 0;
        }
        if (spamScore === 0 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 1 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 2 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 3 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 4 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 5 && isUrlMalicious) {
          spamWeight = 0.3;
          urlWeight = 70;
        }
        if (spamScore === 6 && isUrlMalicious) {
          spamWeight = 5;
          urlWeight = 70;
        }
    
    
    
    
    
      
        // Calculate total percentage based on weights and scores
        const totalPercentage = spamScore * spamWeight + (isUrlMalicious ? 1 : 0) * urlWeight;
      
        // Return whether the email is likely to be spam or not
        return totalPercentage 
        //> 50 ? 'Phishing email' : 'Not phishing email';
      }
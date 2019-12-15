const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('request')
const cheerio = require('cheerio')
const port = 4200;

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello world!')
})

app.post('/getMdata', function(req, res){
    res.setHeader('content-type', 'application/json')
    console.log(req.body.url)
    request(req.body.url, function (error, response, responseHTML){
        var resObj={}
        console.log('scarp function called')
        if(error)
        {
            return res.end(JSON.stringify({error}))
        }

        const metaTags = (name) => {
            $(`meta[name=${name}]`).attr('content') ||
            $(`meta[property="og:${name}"]`).attr('content')  ||
            $(`meta[property="twitter: ${name}"]`).attr('content');
        }

        resObj={}, 
        $ = cheerio.load(responseHTML), 
        $title = $('head title').text(),
        $description = metaTags('description'),
        $ogImage = $('meta[property="og:image"]').attr('content'),
        $images = $('img');

    if($title){
        resObj.title = $title
    }
    if($description){
        resObj.description = $description
    }
    if($ogImage){
        resObj.ogImage = $ogImage
    }
    if($images && $images.length){
        resObj.images = []
        for(let i=0; i<$images.length; i++)
        {
            resObj.images.push($($images[i]).attr('src'))
        }
    }
    console.log(JSON.stringify(resObj))
    res.send(JSON.stringify(resObj))
    })
})

app.listen(port, () =>{
    console.log(`Application started successfully at: ${port}`)
});
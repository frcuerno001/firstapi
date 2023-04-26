var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var location = [
    {
        "id": "1",
        "item": "Millenium"
    },
    {
        "id": "2",
        "item": "Galerias"
    },
    {
        "id": "3",
        "item": "Multiplaza"
    },
    {
        "id": "4",
        "item": "SOHO"
    },
    {
        "id": "5",
        "item": "Plaza Merliot"
    },
    {
        "id": "6",
        "item": "Plaza Madero"
    },
    {
        "id": "7",
        "item": "Plaza Santa Elena"
    },
    {
        "id": "8",
        "item": "Avante"
    },
    {
        "id": "9",
        "item": "El Encuentro Lourdes"
    },
    {
        "id": "10",
        "item": "El Encuentro Opico"
    },
    {
        "id": "11",
        "item": "Metrocentro"
    },
    {
        "id": "12",
        "item": "Metrosur"
    },
    {
        "id": "13",
        "item": "Plaza los olivos"
    }

];


app.post('/location', (req, res) => {
    console.log(res.body);
    location.push(res.body);
    res.send(201);
  });

app.get('/',(req,res) => {
    res.send("Welcome to first app Cuerno")
});

app.get('/location',(req,res) => {
    res.send(location)
});


app.listen(4000, ()=>{
    console.log("Listening to port 4000");
});


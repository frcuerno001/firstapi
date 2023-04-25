const express = require('express');
const app = express();

app.use(cors({
    origin: '*'
}));

const location = [
    {
        "id": "1",
        "item": "Millenium"
    }
];

app.get('/',(req,res) => {
    res.send("Welcome to first app Cuerno")
});

app.get('/location',(req,res) => {
    res.send(location)
});


app.listen(4000, ()=>{
    console.log("Listening to port 4000");
});


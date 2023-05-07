const express = require('express');
const mongoose = require('mongoose');
const Places = require('./models/modelPlaces');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/location', (req, res) => {
    console.log(res.body);
    location.push(res.body);
    res.send(201);
  });

app.get('/',(req,res) => {
    res.send("Welcome to first app with database mongodb")
});

app.get('/location',(req,res) => {
    res.send(location)
});

//Metodo para extraer GET
app.get('/places', async(req,res) => {
    try {
        const places = await Places.find({});
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Metodo para extraer GET por ID
app.get('/places/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const places = await Places.findById(id);
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



//Actualizar Productos
app.put('/places/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const places = await Places.findByIdAndUpdate(id, req.body);
        if (!places) {
            return res.status(404).json({message: 'cannot find any places with ID ${id}'})
        }
        const updatePlaces = await Places.findById(id);
        res.status(200).json(updatePlaces);

    } catch (error) {
        res.status(500).json({message: error.message});    
    }
})



//Eliminar producto
app.delete('/places/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const places = await Places.findByIdAndDelete(id); 
        if (!places) {
            return res.status(404).json({message: 'cannot find any places with ID ${id}'})
        }
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


//Metodo para enviar datos POST
app.post('/places', async(req, res) => {
    try {
        const places = await Places.create(req.body);
        res.status(200).json(places);         
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

//Actualizar Productos
app.put('/places/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const places = await Places.findByIdAndUpdate(id, req.body);
        if (!places) {
            return res.status(404).json({message: 'cannot find any places with ID ${id}'})
        }
        const updatePlaces = await Places.findById(id);
        res.status(200).json(updatePlaces);

    } catch (error) {
        res.status(500).json({message: error.message});    
    }
})


mongoose.
connect('mongodb+srv://admin:costafari@nodeapidb.mqwzbpi.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    app.listen(4000, () => {
        console.log("Node API app is running on port 4000");
    });    
    console.log('Connected to mongoDB');
}).catch((error) =>{
    console.log('conecction error!!!!');
});



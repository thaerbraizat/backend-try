const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dotaa',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: true,
});
const getDotaHeros = require('./controllers/getdata');
const {
    saveData,
    getFavHero,
    deleteFavHero,
    updateHero
 }= require('./controllers/dataCrud');


app.get('/', (req, res) => {
    res.send("WORKING!!")
});

app.get('/dota', getDotaHeros);

app.post('/dotaH',saveData)
app.get('/dotaH',getFavHero)
app.delete('/dotaH/:localized_name',deleteFavHero)

app.put('/dotaH')
 

app.listen(PORT, () => console.log(`listening on ${PORT}`));
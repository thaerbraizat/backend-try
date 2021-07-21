const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());




app.get('/',(req,res) => {
    res.send("WORKING!!")
})

app.get(/)

app.listen(PORT, () => console.log(`listening on ${PORT}`));
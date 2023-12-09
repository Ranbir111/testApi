const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    try{
        res.send("it's working");
    }
    catch(err){
        res.send(err);
    }
})

app.listen(4000, () => {
    console.log("Api started");
})

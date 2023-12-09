const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("it's working");
})

app.listen(4000, () => {
    console.log("Api started");
})
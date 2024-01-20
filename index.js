const express = require ("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.post('/cart', (req, res) => {
    const cartInfo = req.body;
    console.log(cartInfo);
})

app.get('/', (req, res) => {
    res.send('server is running')
})
app.listen(port, () => {
    console.log('movies server')
})


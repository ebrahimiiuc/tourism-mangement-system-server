const express = require('express');
const { MongoClient } = require('mongodb');

const cors = require('cors');
require('dotenv').config()


const port = process.env.PORT || 5000;
const app = express();


//midleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b67bk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect()
        console.log('database connected');
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send("hello from  Travel-Mama node server")
});


app.listen(port, () => {
    console.log('listing to travel-mama  port', port);
});
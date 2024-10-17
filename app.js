require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { ObjectId } = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = process.env.PORT || 5500;
// const uri = `mongodb+srv://barry:${process.env.MONGO_PWD}@cluster0.5abxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 
const uri = `mongodb+srv://barry:cat@cluster0.y0ctk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('./public/'))

console.log(uri);

console.log('im on a node server change that and that tanad f, yo');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// function whateverNameOfIt (params) {}
// ()=>{}

app.get('/', async function (req, res) {
  // res.send('Hello Node from Ex on local dev box')
  //res.sendFile('index.html');

  console.log('in /');
  await client.connect();
  
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("barrys-db").collection("whatever-collection").find({}).toArray(); 
  console.log(result); 


  res.render('index', {
    postData : result
  });

  
})

app.get('/read', async (req,res)=>{

  console.log('in /read');
  await client.connect();
  
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("barrys-db").collection("whatever-collection").find({}).toArray(); 
  console.log(result); 


  res.render('read', {
    postData : result
  });

})

app.post('/insert', async (req,res)=> {

  console.log('in /insert');
  
  console.log('request', req.body);
  //console.log('request', req.body.newPost);

  //connect to db,
  await client.connect();
  //point to the collection 
  await client.db("barrys-db").collection("whatever-collection").insertOne({ post: req.body.newPost});
  // await client.db("barrys-db").collection("whatever-collection").insertOne({ iJustMadeThisUp: 'hardcoded new key '});  
  //insert into it
  res.redirect('index');

}); 

app.post('/update/:id', async (req,res)=>{

  console.log("req.parms.id: ", req.params.id);
  console.log("req.body: ", req.body);

  client.connect; 
  const collection = client.db("barrys-db").collection("whatever-collection");
  let result = await collection.findOneAndUpdate( 
  {"_id": new ObjectId(req.params.id)}, { $set: {"post": req.body.updatedPost } }
)
.then(result => {
  console.log(result); 
  res.redirect('/');
})
}); 

app.post('/delete/:id', async (req,res)=>{

  console.log("req.parms.id: ", req.params.id)

  client.connect; 
  const collection = client.db("barrys-db").collection("whatever-collection");
  let result = await collection.findOneAndDelete( {"_id": new ObjectId(req.params.id)})

.then(result => {
  console.log("result: ", result); 
  res.redirect('/');
})

  //insert into it

})

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});

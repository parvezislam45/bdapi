const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://aurthohinparvez2:mSD8GIb2poNJElnO@cluster0.umgb9ws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const apiCollection = client.db("Country").collection("List");

    app.get("/bd", async (req, res) => {
      const query = {};
      const cursor = apiCollection.find(query);
      const bdApi = await cursor.toArray();
      res.send(bdApi);
    });
  } finally {
  }
}

run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Alhamdulliah Your server is Running");
});
app.listen(port, () => {
  console.log("Alhamdullilah Your server is Start");
});

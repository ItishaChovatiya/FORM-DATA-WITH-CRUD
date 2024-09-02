const  express = require("express")
const connectDB = require("./db/dbConnection");
const router = require("./router/v1");
const cors = require("cors")

const app = express()

const corsOrigin = {
    origin: "http://localhost:3000",
    methods : ["GET",'POST','PUT','DELETE']
}

const port = 4001
app.listen(port,() => {
    console.log("Dynemic port",port);
})

app.use(cors(corsOrigin))

app.use(express.json())

app.use("/v1",router)

connectDB()
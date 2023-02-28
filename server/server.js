console.clear()
const PORT = 9000;
const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const cors = require('cors')

dotenv.config();

const app = express();

app.use(express.json()); 

app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {  
    res.header("Access-Control-Allow-Credentials", true); 
    next();
  });

app.use(
    cors({
      origin: ["http://127.0.0.1:5173","http://127.0.0.1:4173"],
    })
  );
app.use(morgan("common")); 

// Router
const users = require("./routes/users.router.js");
app.use("/users",users)

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started at port ${PORT}`)
    })
})


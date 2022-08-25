const express = require('express');
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const helmet = require('helmet');
const morgan = require("morgan")
const app = express()
    //ROUTES PATHS
const UserRoute = require('./routes/users');
const UserAuth = require('./routes/auth');
const postRoute = require("./routes/post")

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    () => {
        console.log("mongdb is connected");
    }
);

//middleware 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
var cors = require('cors')

//Routes
app.get('/', (req, res) => {
    res.send("Welcome to home Page")
        // ,    "proxy": "http://localhost:8000/api"
})
app.use(cors())

app.use("/api/users", UserRoute)
app.use("/api/auth", UserAuth)
app.use("/api/posts", postRoute)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`The server is runnning on port ${PORT}`)
})
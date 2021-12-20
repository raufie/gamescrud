const express = require("express")
const bodyParser = require("body-parser")
const gameRoutes = require("./routes/games")
const indexRoutes = require("./routes/index")
const mongoose = require("mongoose")
const cors = require("cors")
const PORT = 3001
var path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
//db
mongoose.connect("mongodb://localhost:27017/games").then(res => {
    console.log("connected to mongodb")
}).catch(e => {
    console.log('error connecting with mongodb')
    console.log(e)
})
//ejs

app.set("view engine", 'ejs')


//routes



app.use(bodyParser.json())
app.use(cors())
app.use('/api/games', gameRoutes)
app.use("/", indexRoutes)
// ejs


app.listen(PORT, () => {
    console.log('listening at ' + PORT)
})
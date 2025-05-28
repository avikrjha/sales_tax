const config = require("./server/config")
const indexRoutes = require("./routes/index")
const express = require("express")
const app = express()
app.use(express.json())
app.use("/api/v1",indexRoutes)


app.listen(config.port, ()=>{
    console.log(`server is listioning on port ${config.port}`)
})
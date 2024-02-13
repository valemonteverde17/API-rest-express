const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send('Vale Monteverde')
})

app.listen(port,()=>{
    console.log("Escuchando el puerto: ",port)
})
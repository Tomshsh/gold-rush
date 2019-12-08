const express = require ('express')
const bodyParser = require ('body-parser')
const path = require ('path')

const app = express()
const port = 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.listen(port,()=>console.log(`running on ${port}`))

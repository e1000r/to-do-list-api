const express = require('express')
const database = require('./db')
const router = require('./routes')

const app = express()
app.use(express.json())
app.use(router)

app.listen(4000,()=>{console.log('Porta 4k aberta.')})

app.get('/',(request,response)=>
{
	response.send('API para TO DO List')
})
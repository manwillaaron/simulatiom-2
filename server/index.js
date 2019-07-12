require('dotenv').config()
const express = require('express')
const massive =require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()


app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
  });

app.get(`/api/houselist`, ctrl.getHouseList)
app.post('/api/property', ctrl.addHouse)
app.delete(`/api/property/:id`, ctrl.deleteProperty)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)

})
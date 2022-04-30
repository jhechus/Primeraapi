// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// HTTP Methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Api explorers get all  requests ${new Date()}`)
    const explorer1 = {id: 1, name:'JESUS'}
    const explorer2 = {id: 2, name:'JESUS2'}
    const explorer3 = {id: 3, name:'JESUS3'}
    const explorer4 = {id: 4, name:'JESUS4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: 'Jesus'}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //parametros de un cliente
    res.status(201).json({message: 'Created'})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //parametros de un cliente
    res.status(200).json({message: 'Updated'})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorer DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //parametros del cliente
    res.status(200).json({message: 'Deleted'})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})


const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

let notes = [  
  {    
    id: 1,    
    content: "HTML is easy",    
    important: true  
  },  
  {    
    id: 2,    
    content: "Browser can execute only JavaScript",    
    important: false  
  },  
  {    
    id: 3,    
    content: "GET and POST are the most important methods of HTTP protocol",    
    important: true  
  },
  {    
    id: 4,    
    content: "Testinote",    
    important: false  
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on ${PORT}`)
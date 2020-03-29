const express = require('express')


const app = express()

app.get('/', (req, res) => {
  return res.json({
    evento: 'inicio',
    aluno: 'Byron'
  })
});

app.listen(3333)
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const modulos = require('./routes/modulos');
const colegios = require('./routes/colegios');

require('dotenv').config()

//Ajustes
app.set('port', process.env.PORT || 3000);



//Middlewares
app.use(express.json());

//Routes
app.get('/', (req, res)=>{
  res.send('Hola!, mi primer conexión con MySQL')
})

app.use('/api', routes);
app.use('/api/modulos', modulos);
app.use('/api/colegios', colegios);



//Ajustes del servidor
app.listen(app.get('port'),()=>{
  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})


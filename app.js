/*const http = require('http');

http.createServer((req,res) => {

    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    
    res.end('recibido');
})
.listen(8080);*/

//importaciones
require('dotenv').config();
const express = require("express");
const hbs = require('hbs');


//init
const app = express();
const port = process.env.PORT;


//configs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+ '/views/partials');




//servir contenido estatico
//middlewares
app.use(express.static('public'))



app.get("/",  (req, res) => {
  res.render('home',{
    nombre: 'Waldir Marín',
    titulo: 'Node Projects'
  });
});

app.get("/elements",  (req, res) => {
  res.render('elements',{
    clase1: 'subpage',
    clase2: 'alt',
    nombre: 'Waldir Marín',
    titulo: 'Node Projects'
  });
});

app.get("/generic",  (req, res) => {
  res.render('generic',{
    clase1: 'subpage',
    clase2: 'alt',
    nombre: 'Waldir Marín',
    titulo: 'Node Projects'
  });
});

app.get('*',(req,res) => {
  res.render('404');
});

  
  



app.listen(port,() => {
    console.log(`arrancando desde el puerto ${port}`)
});

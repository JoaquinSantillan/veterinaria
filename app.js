const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

//conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.95sfmju.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri)    
    .then(()=> console.log('base de datos conectada'))


//motor de plantilla
app.set('view engine','ejs');
app.set('views',__dirname + '/view')

//middleware
app.use(express.static(__dirname + "/public"))
//rutas de la api
app.use('/',require('./router/RutasWeb'));
app.use('/mascotas',require('./router/Mascotas'));

//listen-port
app.listen(port,()=>{
    console.log('server enable',port);
});

//404-route
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"titulo del sitio web"
    });
});
const express= require("express"); // importar la liberia express-Crear Servidor
const app = express(); // levantar el servidor-Crear Servidor

app.get("/acamica/dwfs/alumnos",(req,res)=>{
    res.json({
        Nombre:"Mi primer server"
    })
}); //Definir la ruta y la funcion 

app.get("/acamica/dwfs/alumnos/:id",(req,res)=>{//Enviar los parametros
    if(parseInt(req.params.id).toString()=="NaN"){ //comparar lo que recibo para comparar e identificar si es texto
        res.status(404).json({ message:"No permito letras"})//Retorna error 
    }
        res.json({ //Devolver el parametro que esta enviando el usuario
        id:req.params.id
    })
})
app.listen(3000,()=>{  // poner a escuchar por medio del puerto 3000 y realizar el callbak para saber si ejecuta el proceso -Crear Servidor
    console.log("Escuchando en http://localhost:3000/");
});

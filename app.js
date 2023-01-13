const express=require ('express');
const app= express ();
const path =  require ('path');
//creamos una variable PORT, la cual guardara el numero de puerto disponible que nos asignara el servicio web de la plataforma de Render//

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

//LE INDICO AL SERVIDOR DONDE ESTA LA CARPETA DE ARCHIVOS PUBLICOS>/PUBLIC
const rutaAPublic =path.join (__dirname, "public")
const static =express.static (rutaAPublic);   //estas 3 lineas juntas es lo mismo que: app.use(express.static(path.join(__dirname, "../public")));>>
app.use(static);

console.log (__dirname);
console.log (rutaAPublic);

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

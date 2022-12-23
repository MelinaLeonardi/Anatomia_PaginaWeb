const express=require ('express');
const app= express ();
const path =  require ('path');
app.listen (3000,()=>{
    console.log('El servidor prendio');
})
const rutaAPublic =path.join (__dirname, "public")
const static =express.static (rutaAPublic);
app.use(static);
console.log (__dirname);
console.log (rutaAPublic);

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
})


app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
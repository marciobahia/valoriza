import express, { response } from "express";


// @types/express
const app = express();

app.get("/test", (request, response) => {
   return response.send("Olá Mundo");
});

app.post("/test-post", (Request, response) => {
    return response.send("Olá valoriza método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running Valoriza"));



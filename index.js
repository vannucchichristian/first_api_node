import express from  'express';

const app = express();

const port = 3000;

// Definizione di una rotta
app.get('/', (req, res) => {  // Modo sintetico per passare una funzione a un'altra
    res.send("Ciao da Express");
});

app.listen(port, () => {
    console.log("Server in ascolto sulla porta: " + port);
});

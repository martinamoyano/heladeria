import express from "express";
import { router as heladeriaRt } from "./src/heladeria/heladeriaRt";
  
const app = express();
const port = 3000; 
  
app.use(express.json());

app.use("/heladeria", heladeriaRt);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
  
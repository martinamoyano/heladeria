import { Router } from "express";
export const router = Router();

import { HeladeriaCt } from "./heladeriaCt.js";

//para traer todos los productos
router.get("/", HeladeriaCt.getAll);

//para crear
router.post("/productos", HeladeriaCt.addOne);

// para actualizar
router.put("/productos/:nombre_producto", HeladeriaCt.updateOne);

//para eliminar
router.delete("/productos/:nombre_producto", HeladeriaCt.deleteOne);

//por tipo
router.get("/productos/tipo/:tipo", HeladeriaCt.getByType);
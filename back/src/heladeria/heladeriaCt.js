import HeladeriaModel from "./heladeriaMd.js";

export class HeladeriaCt {
  // para traer todos los productos
  static async getAll(req, res) {
    try {
      const productos = await HeladeriaModel.getAll();
      res.json(productos);
    } catch (error) {
      res.status(error.status || 500).send(error.mensaje || "Error del servidor");
    }
  }

  // para crear
  static async addOne(req, res) {
    const { nombre_producto, descripcion } = req.body;
    try {
      const nuevoProducto = await HeladeriaModel.addOne(nombre_producto, descripcion);
      res.status(201).json(nuevoProducto);
    } catch (error) {
      res.status(error.status || 500).send(error.mensaje || "Error del servidor");
    }
  }

  // para actualizar
  static async updateOne(req, res) {
    const { nombre_producto } = req.params;
    const { descripcion } = req.body;
    try {
      const productoActualizado = await HeladeriaModel.updateOne(nombre_producto, descripcion);
      res.json(productoActualizado);
    } catch (error) {
      res.status(error.status || 500).send(error.mensaje || "Error del servidor");
    }
  }

  // para eliminar
  static async deleteOne(req, res) {
    const { nombre_producto } = req.params;
    try {
      const mensaje = await HeladeriaModel.deleteOne(nombre_producto);
      res.send(mensaje);
    } catch (error) {
      res.status(error.status || 500).send(error.mensaje || "Error del servidor");
    }
  }

  // por tipo
  static async getByType(req, res) {
    const { tipo } = req.params;
    try {
      const productosPorTipo = await HeladeriaModel.getByType(tipo);
      res.json(productosPorTipo);
    } catch (error) {
      res.status(error.status || 500).send(error.mensaje || "Error del servidor");
    }
  }
}


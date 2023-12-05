import { connection } from "../../dbConfig";

class HeladeriaModel {
  static async getAll() {
    try {
      const [rows, fields] = await connection.query(`SELECT * FROM productos`);
      return rows;
    } catch(error) {
      console.error("Error al obtener los productos:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }

  static async addOne(nombre_producto, descripcion) {
    try {
      await connection.query(`
        INSERT INTO productos (nombre_producto, descripcion)
        VALUES (?, ?)`, 
        [nombre_producto, descripcion]);
      return { nombre_producto, descripcion };
    } catch(error) {
      console.error("Error al crear producto:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }
  
  static async updateOne(nombre_producto, descripcion) {
    try {
      const result = await connection.query(`
        UPDATE productos 
        SET descripcion = ? 
        WHERE nombre_producto = ?`, 
        [descripcion, nombre_producto]);
      
      if (result.affectedRows > 0) {
        const updatedProduct = await connection.query(
          `SELECT * 
           FROM productos 
           WHERE nombre_producto = ?`,
          [nombre_producto]
        );
  
        if (updatedProduct.length > 0) {
          const updatedProductData = updatedProduct[0];
          return updatedProductData;
        }
      } throw { status: 404, mensaje: "Producto no encontrado" };
    } catch(error) {
      console.error("Error al actualizar producto:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }
  
  static async deleteOne(nombre_producto) {
    try {
      const result = await connection.query(`
      DELETE FROM productos 
      WHERE nombre_producto = ?`, 
      [nombre_producto]);
      if (result.affectedRows > 0) {
        return "Producto eliminado";
      } else {
        throw { status: 404, mensaje: "Producto no encontrado" };
      }
    } catch(error) {
      console.error("Error al eliminar:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }

  static async getByType(tipo) {
    try {
      const [rows, fields] = await connection.query(`
      SELECT productos.*
      FROM productos
      JOIN productos_tipo_helado ON productos.id = productos_tipo_helado.id
      JOIN tipo_helado ON productos_tipo_helado.id_tipo = tipo_helado.id_tipo
      WHERE tipo_helado.tipo = ?;`, 
      [tipo]);
      return rows;
    } catch(error) {
      console.error("Error al obtener productos por tipo:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }
}

export default HeladeriaModel;
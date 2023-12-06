import { connection } from "../../dbConfig.js";

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

  static async addOne(nombre_producto, descripcion, tipo) {
    try {
      const [result] = await connection.query(
        'INSERT INTO productos (nombre_producto, descripcion) VALUES (?, ?)',
        [nombre_producto, descripcion]
      );
      const lastProductId = result.insertId;
        await connection.query(
        'INSERT INTO productos_tipo_helado (id, id_tipo) SELECT ?, id_tipo FROM tipo_helado WHERE tipo = ?',
        [lastProductId, tipo]
      );
      return { nombre_producto, descripcion, tipo };
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw { status: 500, mensaje: 'Error del servidor' };
    }
  }

  static async updateOne(nombre_producto, nueva_descripcion) {
    try {
      const [verificarProducto] = await connection.query('SELECT * FROM productos WHERE nombre_producto = ?', [nombre_producto]);
      if (verificarProducto.length === 0) {
        throw { status: 404, mensaje: "Producto no encontrado" };
      }
      const updateQuery = `
        UPDATE productos
        SET descripcion = ?
        WHERE nombre_producto = ?`;

      await connection.query(updateQuery, [nueva_descripcion, nombre_producto]);

      const [productoActualizado] = await connection.query('SELECT * FROM productos WHERE nombre_producto = ?', [nombre_producto]);

      return productoActualizado[0];
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      } 
      throw { status: 500, mensaje: 'Error del servidor' };
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
        return "Producto no encontrado";
      }
    } catch (error) {
      console.error("Error al eliminar", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }
  
  static async getByType(tipo) {
    try {
      const [rows, fields] = await connection.query(
        `
        SELECT productos.*
        FROM productos
        JOIN productos_tipo_helado ON productos.id = productos_tipo_helado.id
        JOIN tipo_helado ON productos_tipo_helado.id_tipo = tipo_helado.id_tipo
        WHERE tipo_helado.tipo = ?
        `,
        [tipo]  
      );
      return rows;
    } catch (error) {
      console.error("Error al obtener productos por tipo:", error);
      throw { status: 500, mensaje: "Error del servidor" };
    }
  }
  
}

export default HeladeriaModel;
import connection from "./database.js";

class UserService {
  getdataAllUsers = async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM USER");
      return rows;
    } catch (error) {
      console.error("Error al obtener los datos de los usuarios:", error);
    }
  };

  create = async (data) => {
    try {
      const usuario = {
        NOMBRES: data.nombres,
        CORREO: data.correo,
      };
      return await connection.query("INSERT INTO USER SET ?", usuario);
    } catch (error) {
      console.error("Error al resgitrar al usuario:", error);
    }
  };

  delete = async (id) => {
    try {
      return await connection.query("DELETE FROM USER WHERE id = ?", [id]);
    } catch (error) {
      console.error("Error al eliminar al usuario:", error);
    }
  };
}

export default new UserService();

import app from './app.js';
import {connectDB} from './config/db.js';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Servidor arriba en el puerto 3000");
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
};

startServer();


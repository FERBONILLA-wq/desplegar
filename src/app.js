// app.js
import corse from "cors";
import express from "express";
import morgan from "morgan";
import authRoute from "./routes/auth.route.js";
import authDealerRoute from "./routes/auth.dealer.route.js";
import authProductRoute from "./routes/auth.product.route.js";

const app = express();
app.use(corse());
app.use(morgan("dev"));
app.use(express.json());

// Manejar solicitudes GET a la URL raíz
app.get("/", (_, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/api", authRoute);
app.use("/api/dealer", authDealerRoute);
app.use("/api/product", authProductRoute);
export default app;

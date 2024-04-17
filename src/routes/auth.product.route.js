import { Router } from "express"
import { getProducts, login, register, update, addFechaCreacion, deleteProduct } from "../controller/auth.product.controller.js"
const router = Router()

router.post("/register", register)
router.post("/login", login)
router.get("/products", getProducts)
router.patch("/update", update)
router.put("/addFechaCreacion", addFechaCreacion);
router.put("/delete", deleteProduct);
export default router
import {Router} from 'express';
import { getDealers, login, register, update, addFechaCreacion, deleteDealer } from '../controller/auth.dealer.controller.js';
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dealers", getDealers)
router.patch("/update", update);
router.put("/addFechaCreacion", addFechaCreacion);
router.put("/delete", deleteDealer);
export default router;
import { Router } from "express";
import leaguesRoutes from "./leagues.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/leagues", leaguesRoutes);

export default router;

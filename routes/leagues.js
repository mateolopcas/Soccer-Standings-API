import { Router } from "express";
import * as controllers from "../controllers/leagues.js";
const router = Router();

router.get("/", controllers.getLeagues);
router.get("/:id", controllers.getLeague);
router.post("/", controllers.createLeague);
router.put("/:id", controllers.updateLeague);
router.delete("/:id", controllers.deleteLeague);

export default router;

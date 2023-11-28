import {Router} from "express";
import beritaController from "../controllers/beritaController.js";


const beritaRouter = Router();

beritaRouter.get('/', beritaController.getAllNews);

export default beritaRouter;


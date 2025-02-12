import { Router } from "express";
import { RegisterController } from '../controller';

const router = Router();

// router.get("/getToken", RegisterController.teste);

// router.get("/refreshToken", RegisterController.refresh);


router.get("/teste/produtos", RegisterController.produtos);
router.get("/teste/imagem", RegisterController.imagem);

export { router };

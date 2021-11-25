import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ComplimentsController } from "./controllers/ComplimentsController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersServiceController } from "./controllers/ListUsersServiceController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentsController = new ComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagsController = new ListTagsController();
const listUserServiceController = new ListUsersServiceController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, complimentsController.handle);

router.get("users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("users/compliments/receiver", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle );
router.get("/users",ensureAuthenticated, listUserServiceController.handle )

export { router };

/*Metodo de criação do Controle da Router
 *
 * Migrations => Entities =>
 * Repositories => Services =>
 * Controllers => Routers
 *
 * Definindo as routers da minha API;
 */
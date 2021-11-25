import { Request, Response } from "express";
import { ListUsersServices } from "../services/ListUsersServices";

class ListUsersServiceController {
    async handle(request: Request, response: Response) {
        const listUsersServices = new ListUsersServices();
        const users = await listUsersServices.execute();


        return response.json(users);
    }
}

export { ListUsersServiceController };

/**
 * Criando um controle da Lista de Usuários;
 */
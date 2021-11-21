import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {

        const { email, password} = request.body;

        const authenticateUserServices = new AuthenticateUserServices();

        const token =await authenticateUserServices.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };

/**
 * Criando um controle para Autenticação de USER;
 */
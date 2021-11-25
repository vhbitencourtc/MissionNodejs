import { Request, Response } from "express";
import { CreateComplimentsServices } from "../services/CreateComplimentsServices";

class ComplimentsController {
    async handle(request: Request, response: Response) {

        const { tag_id, user_receiver, message } = request.body;
        const { user_id } = request;

        const createComplimentsServices = new CreateComplimentsServices();

        const compliment = await createComplimentsServices.execute({
            tag_id, user_sender: user_id, user_receiver, message
        });

        return response.json(compliment);
    }
}

export { ComplimentsController };

/**
 * Metodo de criação de conexão com Entidades;
 * Importado as configurações de Services;
 * Atribuido o user_id  ao user_sender;
 */
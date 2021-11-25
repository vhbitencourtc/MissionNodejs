import { Request, Response } from "express";
import { ListTagsServices } from "../services/ListTagsServices";

class ListTagsController {
    async handle(request: Request, response: Response){

        const listTagsServices = new ListTagsServices();

        const tags = await listTagsServices.execute();

        return response.json(tags);
    }

 }

export { ListTagsController };


/**
 * Criando um controle da nossa lista de Tags
 */
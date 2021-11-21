import { Request, Response } from "express";
import { CreateTagsServices } from "../services/CreateTagsServices";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createTagsServices = new CreateTagsServices();

        const tag = await createTagsServices.execute(name);

        return response.json(tag)
    }
}

export { CreateTagController }

/**
 * Migrations => Entities =>
 * Repositories => Services =>
 * Controllers => Routers
 */
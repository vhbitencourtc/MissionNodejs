import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagsServices {
    async execute(name: string) {
        const tagRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("O nome está incorreto!");
        }

        const tagAlreadyExists = await tagRepository.findOne({
            name
        });

        if (tagAlreadyExists) {
            throw new Error("TAG já cadastrada!");
        }

        const tag = tagRepository.create({
            name
        });

        await tagRepository.save(tag);
        return tag;
    }
}

export { CreateTagsServices };

/**
 * Metodo de criacao de Servicos de Tags;
 *
 * Migrations => Entities =>
 * Repositories => Services =>
 * Controllers => Routers
 */
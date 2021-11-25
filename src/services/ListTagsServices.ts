import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagsServices {
    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const tags = await tagsRepositories.find();
        return tags;
    }
}

export { ListTagsServices }

/**
 * Criando um serviço de Listagem de Tags;
 */
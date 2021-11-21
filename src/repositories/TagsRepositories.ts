import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../entities/Tags";

@EntityRepository(Tags)
class TagsRepositories extends Repository<Tags>{
}

export { TagsRepositories };

/**
 * Metodo de criação de Repositorio;
 * Importando as configurações de Tags;
 *
 * Migrations => Entities =>
 * Repositories => Services =>
 * Controllers => Routers
 */
import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
class ComplimentsRepositories extends Repository<Compliments>{
}

export { ComplimentsRepositories };

/**
 * Metodo de criação de Repositorio;
 * Importando as configurações de Compliments;
 *
 */
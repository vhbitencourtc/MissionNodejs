import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class ListUsersServices {
    async execute() {
        const userRepositories = getCustomRepository(UserRepositories);

        const users = await userRepositories.find();

        return users;
    }
}

export { ListUsersServices };

/**
 * Criando um serviço de Lista de Usuários;
 */
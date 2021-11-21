import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean,
    password: string,
}

class CreateUserServices {
    async execute({ name, email, admin, password }: IUserRequest) {
        const userRepository = getCustomRepository(UserRepositories);

        if (!email) {
            throw new Error("O e-mail está incorreto!");
        }

        const usersAlreadyExists = await userRepository.findOne({
            email,
        });

        if (usersAlreadyExists) {
            throw new Error("Usuário já cadastrado!");
        }

        const passwordHash = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })
        await userRepository.save(user);
        return user;
    }
}

export { CreateUserServices };

/*Metodo de criação de Serviços do Usuario
*(const user)Instancia do meu objeto de guardar as informações do Usuario
*Inserido o PASSWORD;
* Para criptografa as senhas do USERS, bcryptjs;
*/
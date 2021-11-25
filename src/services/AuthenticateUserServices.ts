import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UserRepositories";

interface iAuthenticateUserServices {
    email: string,
    password: string,
}

class AuthenticateUserServices {
    async execute({ email, password }: iAuthenticateUserServices) {
        const userRepository = getCustomRepository(UserRepositories);

        //1ºPasso: Verificar se o e-mail está cadastrado!
        const userValida = await userRepository.findOne({
            email,
        });
        if (!userValida) {
            throw new Error("E-mail/Senha incorretas!");
        }

        //2ºPasso: Verificar se a senha está correta!
        const passwordValida = await compare(password, userValida.password);

        if (!passwordValida) {
            throw new Error("E-mail/Senha incorretas!");
        }

        //3ºPasso: Gerar o Token!
        const token = sign(
            {
                email: userValida.email,
            },
            "6b03a93b3230cbfc749b334ff0075048",
            {
                subject: userValida.id,
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserServices }

/**
 *Compare é função do bcryptjs que valida se a cripto da senha;
 bate com a senha digitada pelo USER;
 *Sign é um atributo do JWT que utiliza a nossa chave para
 assinar e validar os TOKENS dos usuários;
 *Subject é um atributo do JWT inserir o TOKEN gerado no ID,
 e o ExpiresIs é a validade do TOKEN, neste caso configurado para 1D;
 */
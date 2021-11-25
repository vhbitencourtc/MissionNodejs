import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserReceiverComplimentsService {

    async execute(user_id: string) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver","tag" ]
            //Traz todas as info de dados que serão puxados;
        })
        return compliments;
    }
}

export { ListUserReceiverComplimentsService };

/**
 * Criando um service para listar elogios recebidos pelo User;
 */

import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentsService {

    async execute(user_id: string) {

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsRepositories.find({
            where: {
                user_send: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
            //Traz todas as info de dados que serão puxados;
        })
        return compliments;
    }
}

export { ListUserSendComplimentsService };

/**
 * Criando um service para listar elogios enviados pelo User;
 */

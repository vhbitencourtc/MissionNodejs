import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string,
}

class CreateComplimentsServices {
    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositories = getCustomRepository(UserRepositories);

        //Validando se o usuário elogiado não é ele mesmo!
        if (user_sender === user_receiver){
            throw new Error("O usuário informado está incorreto!");            
        }

        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        
        //Validando se o usuário elogiado existe!
        if (!userReceiverExists) {
            throw new Error("Não existe o usuário elogiado!");
        }

        const compliment = complimentsRepositories.create({
        tag_id,
        user_receiver,
        user_sender,
        message    
        });

        await complimentsRepositories.save(compliment);
        return compliment;
    }

}

export { CreateComplimentsServices };

/**
 *Metodo de criação de Serviços do Elogios;
 */
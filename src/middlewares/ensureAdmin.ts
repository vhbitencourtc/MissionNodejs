import { Request, Response, NextFunction } from "express";
import { UserRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Condição que verifica se o user é ADMIN!
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UserRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    //Verificar se usuário é ADMIN;
    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Não autorizado!"
    });
}

/**
 * Metodo para criação do Perfil ADMIN;
 * Porta 401 é para user sem autorização;
 *  */
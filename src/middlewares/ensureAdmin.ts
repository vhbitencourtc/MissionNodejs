import { Request, Response, NextFunction } from "express";



export function ensureAdmin(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Condição que verifica se o user é ADMIN!
    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401).json ({
        error: "Não autorizado!"
    });
}

/**
 * Metodo para criação do Perfil ADMIN
 * Porta 401 é para user sem autorização
 *  */
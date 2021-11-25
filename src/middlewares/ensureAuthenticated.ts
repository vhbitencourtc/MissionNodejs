import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPauload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //Receber o Token de Ativação;
    const authToken = request.headers.authorization;

    //Validar se o Token está preenchido;
    if (!authToken) {
        return response.status(401).end();
    }
    //Validar se o Token é válido;

    //Transformar token em Array e escolhe uma posição;
    const [, token] = authToken.split(" ");
    //Usar Try/Catch para ver se o Token é Válido;
    try {
        const { sub } = verify(
            token, "6b03a93b3230cbfc749b334ff0075048") as IPauload;
        //Recuperar informações do usuário;
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }

}




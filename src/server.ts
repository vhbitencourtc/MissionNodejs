import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

/*Middleware de Errors*/
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
if(err instanceof Error){
    return response.status(400).json({
        error: err.message,
    })
}
 return response.status(500).json({
     status: "ERROR",
     message: "Internet Server Error."
 })
});

app.listen(3000, () => console.log("Server is running"));

/*Metodo de criação de conexão com BD*/
/*Importado a Router e executação ao Server*/
/*app.use criado um Middleware*/
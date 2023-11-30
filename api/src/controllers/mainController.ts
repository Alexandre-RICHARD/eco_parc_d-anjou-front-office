import {Request, Response} from "express";

const mainController = {
    "test": (_req: Request, res: Response): void => {
        try {
            res.json("Le serveur fonctionne");
        } catch (error) {
            console.trace(error);
            res.status(200).json(error);
        }
    },
};

export default mainController;

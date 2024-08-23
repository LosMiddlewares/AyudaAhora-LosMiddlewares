import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const authenticateUser = async (req, res, next) => {
    console.log("middleware ejecutado")

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authHeader.split(' ')[1]; // Extrae el token eliminando el prefijo 'Bearer'

        const { user: userId } = jwt.verify(token, config.SECRET_KEY);

        req.userId = userId; // Adjuntamos el ID del usuario al objeto de solicitud para que esté disponible en los controladores
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
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
        if (!token) {
            return res.status(401).json({ message: "Token inválido o expirado" });
        }
        jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Token inválido o expirado" });
            }
            req.user = decoded; // guardamos la información del usuario en el objeto `req`
            console.log(req.user);
            next();
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
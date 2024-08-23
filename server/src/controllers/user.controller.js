import { userService } from "../services/user.service.js";
import { createJWT } from "../utils/jsonwebtoken.js";
import { handleError } from "../utils/errorCatch.js";


export const userController = {
    async getUsers(_req, res) {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            handleError(error, res, "Error al obtener usuarios");
        };
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            handleError(error, res, `Error al obtener usuario con id ${id}`);
        };
    },

    async createUser(req, res) {
        try {
            const user = req.body;
            console.log('User object:', user);
            const userCreated = await userService.createUser(user);
            res.status(201).json(userCreated);
        } catch (error) {
            handleError(error, res, "Error al registrar usuario");
        }
    },
    

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const userDeleted = await userService.deleteUser(id);
            res.status(200).json(userDeleted);
        } catch (error) {
            handleError(error, res, `Error al eliminar usuario con id ${id}`);
        };
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updatedUserData = req.body;
            const updatedUser = await userService.updateUser(id, updatedUserData);
            res.status(200).json(updatedUser);
        } catch (error) {
            handleError(error, res, `Error al actualizar usuario con id ${id}`);
        };
    },

    async userLogin(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userService.userLogin(email, password);
            const { id, email: userEmail } = user;
            const token = await createJWT({ id, email: userEmail });
            res.status(200).json({ token, user });
        } catch (error) {
            handleError(error, res, "Error al iniciar sesión");
        };
    },
};
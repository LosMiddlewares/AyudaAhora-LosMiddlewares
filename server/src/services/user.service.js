import { Users } from "../models/users.js";
import { hashPassword, comparePassword } from '../utils/hash.js';

export const userService = {

    async getUsers (users) {
        try {
            return await Users.findAll(users)
        } catch (error) {
            throw new Error("error al obtener usuarios");
        };
    },

    async getUserById (id) {
        try {
            const user = await Users.findByPk(id)
            if (!user) {
                return "usuario no encontrado"
            };
            return user
        } catch (error) {
            throw new Error("error al obtener el usuario")
        };
    },

    async createUser(user) {
        try {
            user.password = await hashPassword(user.password);
            return await Users.create(user);
        } catch (error) {
            throw new Error(`error al registrar usuario: ${error.message}`);
        };
    },

    async deleteUser(id) {
        try {
            const user = await this.getUserById(id);
            await user.destroy();
            return { message: 'usuario eliminado' };
        } catch (error) {
            throw new Error('error al eliminar usuario: ', error);
        };
    },

    async updateUser(id, updatedUserData) {
        try {
            const user = await this.getUserById(id);
            return await user.update(updatedUserData);
        } catch (error) {
            throw new Error ('error al actualizar el usuario', error);
        };
    },

    async userLogin(email, password) {
        try {
            const user = await Users.findOne({ where: { email } });
            if (!user) {
                return { message: 'usuario no encontrado' };
            };
            const isPasswordValid = await comparePassword(password, user.password);
            if (!isPasswordValid) {
                return { message: 'contraseña incorrecta' };
            };
            return user;
        } catch (error) {
            throw new Error('error al iniciar sesion: ', error);
        };
    },
};
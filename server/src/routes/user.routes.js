import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { validator } from '../middlewares/validator.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { userSchema } from '../models/schemas/user.schema.js';

const userRouter = Router();

userRouter.get('/', authenticateUser, userController.getUsers);

userRouter.get('/:id', authenticateUser, userController.getUserById);

userRouter.post('/', validator, userSchema, userController.createUser);

userRouter.delete('/:id', authenticateUser, userController.deleteUser);

userRouter.put('/:id', authenticateUser, userController.updateUser);

userRouter.post('/login', userController.userLogin);

export default userRouter;
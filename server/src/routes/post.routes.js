import { Router } from 'express';
import { postController } from '../controllers/post.controller.js';
import { upload } from '../middlewares/multerMiddleware.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
// import { validator } from '../middlewares/validator.js';

const postRouter = Router();

postRouter.get('/', postController.getPosts);

postRouter.get('/:id', postController.getPostById);

postRouter.post('/', authenticateUser, authenticateUser, upload.single('image'), postController.createPost);

postRouter.put('/:id', postController.updatePost);

postRouter.delete('/:id', postController.deletePost);

export default postRouter;

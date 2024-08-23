import { Router } from 'express';
import userRouter from './user.routes.js';
import postRouter from './post.routes.js';
import donationRouter from './donation.routes.js';

const router = Router()

router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/donation', donationRouter);

export { router }
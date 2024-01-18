import express from 'express';
import { eventRouter } from './events';
// import { userRouter } from './users';
// import { createUser, login } from '../controllers/event';

const router = express.Router();

// router.post('/signup', createUser);
// router.post('/signin', login);

router.use('/event', eventRouter);
// router.use('/users', userRouter)
router.use('*', (req, res) => {
  res.status(404).send({ message: "страница не найдена"})
})

export {
  router
}
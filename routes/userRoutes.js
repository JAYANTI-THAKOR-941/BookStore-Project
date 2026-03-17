import express from 'express';
import { getLogin, getSignUp, loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/login',getLogin);
router.post('/login',loginUser);

router.get('/register',getSignUp);
router.post('/register',registerUser);

export default router;
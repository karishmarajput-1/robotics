import express from 'express';
import { register, login, getProfile, makeAdmin, validateRegister, validateLogin } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/profile', verifyToken, getProfile);
router.post('/make-admin', makeAdmin);

export default router;

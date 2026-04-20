import express from 'express';
import { 
  submitContact, 
  getContacts, 
  updateContactStatus,
  validateContact 
} from '../controllers/contactController.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/submit', validateContact, submitContact);
router.get('/all', verifyToken, verifyAdmin, getContacts);
router.put('/:id/status', verifyToken, verifyAdmin, updateContactStatus);

export default router;

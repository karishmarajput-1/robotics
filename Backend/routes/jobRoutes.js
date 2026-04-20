import express from 'express';
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  validateJob
} from '../controllers/jobController.js';
import { verifyToken, verifyAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.get('/:id', getJobById);
router.post('/', verifyToken, verifyAdmin, validateJob, createJob);
router.put('/:id', verifyToken, verifyAdmin, updateJob);
router.delete('/:id', verifyToken, verifyAdmin, deleteJob);

export default router;

import { dbRun, dbGet, dbAll } from '../config/database.js';
import { body, validationResult } from 'express-validator';

export const validateJob = [
  body('title').notEmpty().withMessage('Job title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('type').isIn(['full-time', 'part-time', 'contract']).withMessage('Valid job type required')
];

export const createJob = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, location, salary, type, requirements } = req.body;

  try {
    const result = await dbRun(
      'INSERT INTO jobs (title, description, location, salary, type, requirements, postedBy) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, description, location, salary || null, type, requirements || null, req.userId]
    );

    res.status(201).json({ message: 'Job created successfully', jobId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getJobs = async (req, res) => {
  try {
    const rows = await dbAll(`
      SELECT j.*, u.name as postedByName 
      FROM jobs j 
      LEFT JOIN users u ON j.postedBy = u.id
      ORDER BY j.createdAt DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const row = await dbGet(`
      SELECT j.*, u.name as postedByName 
      FROM jobs j 
      LEFT JOIN users u ON j.postedBy = u.id
      WHERE j.id = ?
    `, [id]);

    if (!row) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(row);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, salary, type, requirements } = req.body;

  try {
    // Verify ownership
    const job = await dbGet('SELECT postedBy FROM jobs WHERE id = ?', [id]);
    if (!job || job.postedBy !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await dbRun(
      'UPDATE jobs SET title = ?, description = ?, location = ?, salary = ?, type = ?, requirements = ? WHERE id = ?',
      [title, description, location, salary, type, requirements, id]
    );

    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    // Verify ownership
    const job = await dbGet('SELECT postedBy FROM jobs WHERE id = ?', [id]);
    if (!job || job.postedBy !== req.userId) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await dbRun('DELETE FROM jobs WHERE id = ?', [id]);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

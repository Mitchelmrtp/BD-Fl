import express from 'express';
import CategoryController from '../controllers/categoryController.js';

const router = express.Router();

// Routes for categories
router.get('/', CategoryController.findAll);
router.get('/:id', CategoryController.findById);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.remove);

export default router;

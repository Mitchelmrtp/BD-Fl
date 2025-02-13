import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();

// Routes for products
router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findById);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);

export default router;
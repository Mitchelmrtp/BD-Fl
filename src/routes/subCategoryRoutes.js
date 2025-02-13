import express from 'express';
import SubCategoryController from '../controllers/subCategoryController.js';
const router = express.Router();

// Rutas para subcategorías
router.get('/', SubCategoryController.findAll);
router.get('/:id', SubCategoryController.findById);
router.get('/category/:categoryId', SubCategoryController.findByCategory);
router.post('/', SubCategoryController.create);
router.put('/:id', SubCategoryController.update);
router.delete('/:id', SubCategoryController.remove);

export default router;
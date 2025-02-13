import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import productRoutes from './src/routes/productRoutes.js';
import subCategoryRoutes from './src/routes/subCategoryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public/uploads"
app.use('/uploads', express.static('public/uploads'));

app.get('/', (req, res) => {
    return res.json({ result: 'OK' });
});

app.use('/api', authRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use('/subcategory', subCategoryRoutes);

export default app;
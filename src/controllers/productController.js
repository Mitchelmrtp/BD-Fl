import { Product } from '../models/index.js';

export const findAll = async (req, res) => {
    try {
        const { category_id, subcategory_id } = req.query;
        let whereClause = {};
        
        if (category_id) {
            whereClause.category_id = category_id;
        }
        
        if (subcategory_id) {
            whereClause.subcategory_id = subcategory_id;
        }
        
        const products = await Product.findAll({
            where: whereClause,
            include: ['category', 'subcategory']
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const findById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id, {
            include: ['category', 'subcategory']
        });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.update(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.destroy();
        res.status(200).json({ message: 'Product successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default {
    findAll,
    findById,
    create,
    update,
    remove
};
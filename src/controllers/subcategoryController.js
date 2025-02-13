import { SubCategory } from '../models/index.js';

export const findAll = async (req, res) => {
    try {
        const subcategories = await SubCategory.findAll({
            include: ['category']
        });
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const findById = async (req, res) => {
    try {
        const subcategory = await SubCategory.findByPk(req.params.id, {
            include: ['category']
        });
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const findByCategory = async (req, res) => {
    try {
        const subcategories = await SubCategory.findAll({
            where: {
                category_id: req.params.categoryId
            },
            include: ['category']
        });
        res.status(200).json(subcategories);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const subcategory = await SubCategory.create(req.body);
        res.status(201).json(subcategory);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const subcategory = await SubCategory.findByPk(req.params.id);
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        await subcategory.update(req.body);
        res.status(200).json(subcategory);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const subcategory = await SubCategory.findByPk(req.params.id);
        if (!subcategory) {
            return res.status(404).json({ message: 'Subcategory not found' });
        }
        await subcategory.destroy();
        res.status(200).json({ message: 'Subcategory successfully deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default {
    findAll,
    findById,
    findByCategory,
    create,
    update,
    remove
};
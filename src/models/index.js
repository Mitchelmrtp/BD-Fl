import Category from './Category.js';
import SubCategory from './SubCategory.js';
import Product from './Product.js';

// Category - SubCategory relationships
Category.hasMany(SubCategory, {
    foreignKey: 'category_id',
    as: 'subcategory'
});
SubCategory.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

// Category - Product relationships
Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products'
});
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
});

// SubCategory - Product relationships
SubCategory.hasMany(Product, {
    foreignKey: 'subcategory_id',
    as: 'products'
});
Product.belongsTo(SubCategory, {
    foreignKey: 'subcategory_id',
    as: 'subcategory'
});

export {
    Category,
    SubCategory,
    Product
};
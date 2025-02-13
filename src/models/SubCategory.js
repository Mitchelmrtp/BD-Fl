import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const SubCategory = sequelize.define('SubCategory', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    category_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, {
    tableName: 'subcategory',
    timestamps: false
});

export default SubCategory;
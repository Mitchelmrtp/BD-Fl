import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Payment = sequelize.define('Payment', {
    transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    orderNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'PENDING'
    },
    paymentMethod: {
        type: DataTypes.STRING
    },
    responseCode: {
        type: DataTypes.STRING
    },
    responseMessage: {
        type: DataTypes.STRING
    }
});

export default Payment;
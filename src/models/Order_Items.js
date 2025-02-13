import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cliente_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shipping_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  order_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado_pedido: {
    type: DataTypes.STRING,
    allowNull: false
  },


});

export default Order;
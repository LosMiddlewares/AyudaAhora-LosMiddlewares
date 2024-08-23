import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";

export const Donation = sequelize.define('donation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },    
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'donation',
    timestamps: false
},);
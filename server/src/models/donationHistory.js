import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";


export const DonationHistory = sequelize.define('donationHistory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },    
      type: {
        type: DataTypes.ENUM('donated', 'received'),
        allowNull: false
      },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'donationHistory',
    timestamps: false
},);
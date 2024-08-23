import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";

export const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    goal_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    current_amount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    tableName: 'post',
    timestamps: false
},);
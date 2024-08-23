import { DataTypes } from "sequelize";
import { sequelize } from "../db/configDB.js";

export const Roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'roles',
    timestamps: false
})
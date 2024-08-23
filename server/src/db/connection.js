import { sequelize } from "./configDB.js";


export const connectDataBase = async () => {
    await sequelize.sync({ force: false })
    .then(() => console.log('DataBase connected!'))
    .catch((error) => console.log('Error connecting to the database', error))
};
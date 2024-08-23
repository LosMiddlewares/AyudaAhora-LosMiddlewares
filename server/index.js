import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import 'dotenv/config';

import getFileDirName from './src/utils/fileDirName.js';
import { connectDataBase } from './src/db/connection.js';
import { relations } from './src/db/relations.js';
import { router } from './src/routes/index.routes.js';

const { __dirname } = getFileDirName(import.meta);

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use(express.urlencoded({ extended: false }));


app.use('/', router);


app.listen(port, () => {
    relations()
    connectDataBase()
    console.log(`Server running on port http://localhost:${port}`)
});
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import fs from 'node:fs';
import 'dotenv/config';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import { connectDataBase } from './src/db/connection.js';
import { relations } from './src/db/relations.js';
import { router } from './src/routes/index.routes.js';

const app = express();

const port = process.env.PORT;


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router);


app.listen(port, () => {
    relations()
    connectDataBase()
    console.log(`Server running on port http://localhost:${port}`)
});
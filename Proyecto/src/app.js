import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

import './models/index.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('api/', router)
app.set('port', process.env.PORT || 3000);

export default app;
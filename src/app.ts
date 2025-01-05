import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import publicRoutes from './routes/public'

// Create Express server
const app = express();

app.set('port', process.env.PORT || 2200);

app.use(json());
app.use(urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/api', publicRoutes);

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ limit: '50mb' }));

export default app;
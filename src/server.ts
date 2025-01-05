import { EnvLoader } from './config/envLoader';
EnvLoader.load();

import app from './app';
import http from 'http';


const server = http.createServer(app);

server.listen(app.get('port'));

console.info(
  `app is running on http with port : ${app.get(
    'port'
  )} and https with port 443`
);

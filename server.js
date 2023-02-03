
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import 'dotenv/config.js'


import express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import logger from 'morgan';
import favicon  from 'serve-favicon';

import './config/database.js'

// Require controllers here
const app = express();

app.set('view engine', 'ejs');

// console.log(assetsRouter)
// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
// app.use("/src", assetsRouter);
// Configure the auth middleware
// This decodes the jwt token, and assigns
// the user information to req.user
import auth from './config/auth.js'

app.use(auth); 
// api routes must be before the "catch all" route
import userRoutes from './routes/api/users.js';
import likeRoutes from './routes/api/likes.js';
import commentRoutes from './routes/api/comments.js';
import gameRoutes from './routes/api/games.js';

app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api', commentRoutes);
app.use('/api', likeRoutes);

app.use(express.static(path.join(__dirname, "dist")));

import manifest from './dist/manifest.json' assert {type: "json"};

app.get('/*', function(req, res) {
  res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});

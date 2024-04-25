import './config.mjs';
import express from 'express'
import mongoose from 'mongoose';
import fetch from  'node-fetch';
import path from 'path'
import { fileURLToPath } from 'url';
import './db.mjs';

const app = express();

// set the view engine
app.set('view engine', 'hbs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set the public directory as the location for static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware to use req.body
app.use(express.urlencoded({extended: false}));

// define models
const Contact = mongoose.model('Contact');
const Projects = mongoose.model('Projects');

// testing . . . :3
app.get('/', (req, res) => {
    res.render('home', {});
});

app.listen(process.env.PORT || 3000);

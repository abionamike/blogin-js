import express from 'express';
import path from 'path'
import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(express.json());

connectDB();

app.use('/api/blogs', blogRoutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'frontend/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')) )
} else {
    app.get('/', (req, res) => {
        res.send('welcome to blog API');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
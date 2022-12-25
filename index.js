// run `node index.js` in the terminal
import express from 'express';
import weatherRoutes from './routes/weather.js';

const app = express();

// Middlewares
app.use(express.json());

// routes
app.use('/weather', weatherRoutes);
const PORT = 3000;

app.get('/', (req, res) => res.send('server / end point is working'));

app.listen(PORT, () => console.log('server is running'));

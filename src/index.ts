import express from 'express';
import dotenv from 'dotenv';
import helloRouter from './routes/hello.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/hello', helloRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { PORT } from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello from the backend!');
// });

// Middleware to enable CORS
app.use(express.static('dist'));

app.use(cors()); 

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Why did the chicken cross the road?',
      content: 'To get to the other side!'
    },
    {
      id: 2,
      title: 'Why don’t scientists trust atoms?',
      content: 'Because they make up everything!'
    },
    {
      id: 3,
      title: 'What do you call fake spaghetti?',
      content: 'An impasta!'
    }
  ];
  res.json(jokes);
});

const port = 3000;
app.listen(port, () => {
  console.log(`✅ Backend running at http://localhost:${port}`);
});

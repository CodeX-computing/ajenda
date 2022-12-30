import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.get('/api', (req, res) => {
  res.json({ todos: [] });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

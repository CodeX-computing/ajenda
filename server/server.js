import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 3001;

app.get('/api/todos', (req, res) => {
  res.json([{ id: 1, title: 'test1', completed: 'false' }, { id: 2, title: 'test2', completed: 'true' }, , { id: 3, title: 'test3', completed: 'true' }, { id: 4, title: 'new one', completed: 'false' }, { id: 5, title: 'Create a mobile app', completed: 'true' }]);
});

app.get('/api/goals', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Build a todo app',
      mon: false,
      tue: false,
      wed: false,
      thu: true,
      fri: false,
      sat: false,
      sun: false,
      done: false,
    },
    {
      id: 2,
      title: 'Build a postOp app',
      mon: false,
      tue: false,
      wed: false,
      thu: true,
      fri: false,
      sat: false,
      sun: false,
      done: false,
    },
    {
      id: 3,
      title: 'Run for 30 minutes',
      mon: true,
      tue: false,
      wed: false,
      thu: false,
      fri: true,
      sat: false,
      sun: false,
      done: false,
    },
    {
      id: 4,
      title: 'Create a todo list',
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: true,
      done: true,
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

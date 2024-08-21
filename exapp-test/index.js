const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Array of todos
function allTodos() {
  return [
    { id: 1, name: 'Finished writing a blog post' },
    { id: 2, name: 'Get pizza for dinner' },
    { id: 3, name: 'Wake up at 7:30am' },
  ];
}

// Route to get all todos
app.get('/', (req, res) => {
  res.send({
    date: new Date(),
    msg: 'Greetings!',
  });
});

app.get('/todo', (req, res) => {
  res.send(allTodos());
});

// Route to get a todo by id
app.get('/todo/:id', (req, res) => {
  const todoId = Math.abs(req.params.id);
  const todos = allTodos();
  const todo = todos.find(t => t.id === todoId);
  
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Route to get a joke from an external API
app.get('/joke', async (req, res) => {
  try {
    const url = 'https://api.chucknorris.io/jokes/random';
    const response = await fetch(url);
    const joke = await response.json();
    res.send(joke);
  } catch (error) {
    res.status(500).send({ message: 'Failed to fetch joke' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Export the app for use in tests
module.exports = app;

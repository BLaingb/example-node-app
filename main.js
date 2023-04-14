import express from 'express';

const app = express()
const port = 3000

app.get('/sprints', async (req, res) => {
  res.send({ sprints: [] });
});

app.get('/sprint-metrics', async (req, res) => {
  res.send('Hello World!')
});

app.get('/', async (req, res) => {
  res.send('Hello World!')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

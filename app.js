const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

const staticMiddleware = express.static('public');
app.use(staticMiddleware);

// BODY PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   console.log(req);
//   next();
// });

// app.post() // NEW STUFF
// app.delete()// DELETE STUFF
// app.put() // MODIFY STUFF
// app.get() // RETRIEVE STUFF

app.get('/', (req, res, next) => {
  res.send(`
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <h1>Hello there, 2006-FSA-RM!</h1>
  `);
});

app.get('/blt', (req, res, next) => {
  res.json({
    name: 'BLT',
    ingredients: ['bacon', 'lettuce', 'tomato', 'bread', 'mayo'],
  });
});

let sandwiches = [
  {
    id: 1,
    name: 'BLT',
  },
  {
    id: 2,
    name: 'Reuben',
  },
  {
    id: 3,
    name: 'Lox & Cream Cheese',
  },
  {
    id: 4,
    name: 'Chicken Parm',
  },
];

app.get('/sandwiches', (req, res, next) => {
  res.send(`
    <h2>Sandwiches</h2>
    <ul>
      ${sandwiches
        .map(
          (sandwich) => `
        <li>${sandwich.name}</li>
      `
        )
        .join('')}
    </ul>
  `);
});

app.post('/sandwiches', (req, res, next) => {
  const newSandwichName = req.body.sandwichName;
  sandwiches.push({ id: sandwiches.length, name: newSandwichName });
  res.sendStatus(201);
});

app.get('/sandwiches/:id', (req, res, next) => {
  const id = +req.params.id;
  const sandwich = sandwiches.find((sandwich) => sandwich.id === id);
  if (!sandwich) {
    res.sendStatus(404);
  } else {
    res.json(sandwich);
  }
});

// INSANITY!!!
// app.get('/sandwiches/1', (req, res, next) => {
//   res.json(sandwiches[0]);
// })
// app.get('/sandwiches/2', (req, res, next) => {
//   res.json(sandwiches[1]);
// })
// app.get('/sandwiches/3', (req, res, next) => {
//   res.json(sandwiches[2]);
// })

app.listen(8080, () => {
  console.log(`Listening on port 8080`);
});

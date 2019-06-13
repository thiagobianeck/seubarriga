const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');


// TODO criar chaveamento dinâmico
app.db = knex(knexfile.test);

// app.get('/users', (req, res, next) => {
//   console.log('Passei aqui!');
//   next();
// });

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./services')
  .then('./routes')
  .then('./config/routes.js')
  .into(app);

app.get('/', (req, res) => {
  res.status(200).send();
});

// app.use((req, res) => {
//   console.log('e aqui também!');
// });

// app.db.on('query', (query) => {
//     console.log({
//       sql: query.sql,
//       bindings: query.bindings ? query.bindings.join(','): ''
//     });
// })
//   .on('query-response', (response) => console.log(response))
//   .on('error', error => console.log(error));

module.exports = app;

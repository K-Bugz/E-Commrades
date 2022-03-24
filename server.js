const express = require('express');
const routes = require('./routes');
require('dotenv').config(); // import sequelize connection

// Express middleware
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use apiRoutes
app.use('/api', apiRoutes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

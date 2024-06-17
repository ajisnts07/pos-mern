const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('./config/database.config');
const port = require('./config/server.config');

dotenv.config({ path: './config.env' });

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require('express');
const cors = require('cors');
const colors = require('colors');
const housesRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/houses', housesRoutes);

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.yellow.bold);
});

const { loadEnvFile } = require('node:process');
const express = require('express');
const animalsRouter = require('./routes/animals');

if (process.env.NODE_ENV !== 'production') {
  loadEnvFile('.env');
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ 
    message: 'Animals API',
    endpoints: {
      animals: '/api/animals'
    }
  });
});

app.use('/api/animals', animalsRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Servidor POS básico funcionando correctamente 🚀',
    time: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Puerto definido por Azure o 3000 localmente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor ejecutándose en puerto ${PORT}`));

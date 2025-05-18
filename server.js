const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Redirecionar raiz para cadastro
app.get('/', (req, res) => {
  res.redirect('/cadastro.html');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
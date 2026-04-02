const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db');

const alunosRoutes = require('./routes/alunos');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/alunos', alunosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
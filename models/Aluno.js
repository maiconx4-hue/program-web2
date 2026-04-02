const mongoose = require('../db');

const AlunoSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    curso: String,
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Aluno', AlunoSchema);


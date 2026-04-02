
const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

// CADASTRAR ALUNO
router.post('/', async (req, res) => {
    try {
        const aluno = new Aluno(req.body);
        await aluno.save();
        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
});

// LISTAR ALUNOS
router.get('/', async (req, res) => {
    const alunos = await Aluno.find();
    res.json(alunos);
});

module.exports = router;
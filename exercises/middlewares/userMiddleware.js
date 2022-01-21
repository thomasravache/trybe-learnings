const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

router.get('/', async (_req, res, next) => {
  try {
    const users = await User.getAll();

    return res.status(200).json(users);
  } catch (e) {
    return next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.getById(id);

    if (user.length === 0) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user[0]); // getById retorna um array de objetos, porem só quero o primeiro elemento
  } catch (e) {
    return next(e);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await User.create(firstName, lastName, email, password);

    const result = {
      id: newUser.insertId,
      firstName,
      lastName,
      email,
      password,
    };

    return res.status(201).json(result);
  } catch (e) {
    if(e.error === true) return res.status(422).json(e);
    return next(e);
  }
});

// ---------- MIDDLEWARE PARA TRATAMENTO DE ERROS DE APLICAÇÃO ------------

router.use((err, _req, res, _next) => {
  console.error(err);
  return res.status(500).json({ message: 'Erro inesperado' });
});

module.exports = router;

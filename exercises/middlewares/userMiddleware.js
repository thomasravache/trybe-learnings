const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

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

const express = require('express');
const pingRouter = express.Router();

pingRouter.get('/', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

module.exports = pingRouter;

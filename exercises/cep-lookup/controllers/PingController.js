// const express = require('express');
import express from 'express';
const pingRouter = express.Router();

pingRouter.get('/', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

// module.exports = pingRouter;
export default pingRouter;

// server/routes/index.js
const express = require('express');

const router = express.Router();

router.use('/api/v1/todos', require('./api/v1/todoRoutes'));


module.exports = router;
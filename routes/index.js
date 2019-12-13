const express = require('express');

const router = express.Router();

// index page
router.get('/', (req, res) => res.render('../views/index.html'));
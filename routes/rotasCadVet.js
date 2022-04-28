const express = require('express');
const router = express.Router();

const cadVetController = require('../controllers/cadVetController');

router.get('/',cadVetController.index);
router.get('/cadVet',cadVetController.cadVet);

module.exports = router;
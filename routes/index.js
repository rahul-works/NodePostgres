const express = require('express');
const furnitureController = require('../controller/furniture');

const router = express.Router();

// in prod, you would probably sub router and dependency injection here 
// I just left it like this to not make the codebase too big 
router.get('/furniture', furnitureController.getFurniture);
router.post('/furniture', furnitureController.createFurniture);

module.exports = router;
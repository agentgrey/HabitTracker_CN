const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('In router');

router.get('/', homeController.home);
router.get('/404', homeController.notFound)

router.use('/users', require('./users'));


module.exports = router;
const express = require('express');

const router = express.Router();
const habitController = require('../controllers/habit_controller');

router.post('/create-habit', habitController.createHabit);
router.get('/toggle-status', habitController.toggleStatus);
router.get('/delete-habit', habitController.deleteHabit);


module.exports = router;
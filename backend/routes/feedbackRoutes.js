const express = require("express");
const router = express.Router();

const { createFeedback, getAllFeedbacks, deleteFeedback} = require('../controllers/feedbackController');
const { protect , isAdmin, isClient } = require('../middlewares/authMiddleware');
const  feedbackLimiter  = require('../middlewares/rateLimitMiddleware');

router.post('/create', protect, isClient, feedbackLimiter, createFeedback);
router.get('/', protect, getAllFeedbacks);
router.delete('/:id', protect, isAdmin, deleteFeedback);

module.exports = router;

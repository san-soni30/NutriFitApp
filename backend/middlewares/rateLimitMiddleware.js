
const rateLimit = require('express-rate-limit');

const feedbackLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 feedback attempts
  message: 'Too many requests. Try again later.',
});

module.exports = feedbackLimiter;



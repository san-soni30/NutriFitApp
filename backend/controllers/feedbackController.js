const Feedback = require('../models/Feedback');

// Create Feedback
exports.createFeedback = async (req, res) => {
   try {
      const { rating, message } = req.body;

      if (!rating || !message) {
         return res.status(400).json({ message: "Rating and message are required." });
      }

      const existingFeedback = await Feedback.findOne({ userId: req.user.id });
      if (existingFeedback) {
         return res.status(400).json({ message: "You have already submitted feedback." });
      }
      if (message.length < 10) {
         return res.status(400).json({ message: 'Feedback message must be at least 10 characters' });
      }
      const feedback = await Feedback.create({ userId: req.user.id, rating, message });
      return res.status(201).json({ message: 'Feedback created successfully', feedback });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

// Get All Feedbacks
exports.getAllFeedbacks = async (req, res) => {
   try {
      const feedbacks = await Feedback.find().populate('userId', 'name').sort({ rating: -1 });
      return res.status(200).json({ feedbacks });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

// Delete Feedback
exports.deleteFeedback = async (req, res) => {
   try {
      const feedback = await Feedback.findById(req.params.id);

      if (!feedback) {
         return res.status(404).json({ message: "Feedback not found." });
      }
      await feedback.deleteOne();
      return res.status(200).json({ message: "Feedback deleted successfully." });

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}
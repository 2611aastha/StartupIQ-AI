const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ideaTitle: { type: String, required: true },
  ideaDescription: { type: String, required: true },
  startupScore: { type: Number, default: 0 },
  riskLevel: { type: String, default: 'Unknown' },
  marketOpportunity: { type: String, default: 'Unknown' },
  status: { type: String, default: 'Processing' },
  analysis: {
    marketResearch: { type: Object, default: null },
    competitors: { type: Object, default: null },
    swot: { type: Object, default: null },
    revenueModels: { type: Object, default: null },
    riskAssessment: { type: Object, default: null },
    businessPlan: { type: Object, default: null },
    investorPitch: { type: Object, default: null }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
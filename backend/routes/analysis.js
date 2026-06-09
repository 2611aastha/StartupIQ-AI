const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');
const { marketResearchAgent } = require('../agents/marketAgent');
const { competitorAnalysisAgent } = require('../agents/competitorAgent');
const { swotAgent } = require('../agents/swotAgent');
const { revenueModelAgent } = require('../agents/revenueAgent');
const { riskAssessmentAgent } = require('../agents/riskAgent');
const { businessPlanAgent } = require('../agents/businessPlanAgent');
const { pitchAgent } = require('../agents/pitchAgent');

router.post('/validate', auth, async (req, res) => {
  const { ideaTitle, ideaDescription } = req.body;
  if (!ideaTitle || !ideaDescription) {
    return res.status(400).json({ message: 'Idea title and description are required' });
  }

  const project = await Project.create({
    userId: req.userId,
    ideaTitle,
    ideaDescription,
    status: 'Processing'
  });

  res.json({ projectId: project._id, message: 'Analysis started' });

  (async () => {
    try {
      const idea = `${ideaTitle}: ${ideaDescription}`;

      const [market, competitors, swot, revenue, risk, plan, pitch] = await Promise.all([
        marketResearchAgent(idea),
        competitorAnalysisAgent(idea),
        swotAgent(idea),
        revenueModelAgent(idea),
        riskAssessmentAgent(idea),
        businessPlanAgent(idea),
        pitchAgent(idea)
      ]);

      await Project.findByIdAndUpdate(project._id, {
        startupScore: swot.overallScore || 72,
        riskLevel: risk.overallRiskLevel || 'Medium',
        marketOpportunity: market.growthPotential || 'High',
        status: 'Complete',
        'analysis.marketResearch': market,
        'analysis.competitors': competitors,
        'analysis.swot': swot,
        'analysis.revenueModels': revenue,
        'analysis.riskAssessment': risk,
        'analysis.businessPlan': plan,
        'analysis.investorPitch': pitch
      });

      console.log(`Analysis complete for project ${project._id}`);
    } catch (err) {
      console.error('Agent pipeline error:', err.message);
      await Project.findByIdAndUpdate(project._id, { status: 'Failed' });
    }
  })();
});

module.exports = router;
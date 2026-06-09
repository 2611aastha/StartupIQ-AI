const { runAgent } = require('./groqClient');

async function riskAssessmentAgent(idea) {
  return await runAgent(`
Assess risks for this startup: "${idea}"

Return a JSON object:
{
  "risks": [
    {
      "category": "Competition",
      "description": "risk description",
      "severity": "High or Medium or Low",
      "score": 7,
      "mitigation": "how to handle this"
    }
  ],
  "overallRiskLevel": "High or Medium or Low",
  "riskScore": 45,
  "criticalRisk": "the most important risk to address first"
}

Include 5 risks covering Competition, Financial, Operational, Legal, and Technical categories.
`);
}

module.exports = { riskAssessmentAgent };
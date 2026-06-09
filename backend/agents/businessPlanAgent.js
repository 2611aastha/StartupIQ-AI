const { runAgent } = require('./groqClient');

async function businessPlanAgent(idea) {
  return await runAgent(`
Write a business plan for: "${idea}"

Return a JSON object:
{
  "executiveSummary": "paragraph",
  "problemStatement": "paragraph",
  "solution": "paragraph",
  "marketAnalysis": "paragraph",
  "marketingStrategy": "paragraph",
  "operationsPlan": "paragraph",
  "financialProjections": "paragraph",
  "teamRequirements": ["CTO", "Marketing Lead", "Sales Rep"],
  "milestones": [
    { "month": "Month 1-3", "goal": "goal description" },
    { "month": "Month 4-6", "goal": "goal description" },
    { "month": "Month 7-12", "goal": "goal description" },
    { "month": "Year 2", "goal": "goal description" }
  ]
}
`);
}

module.exports = { businessPlanAgent };
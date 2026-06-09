const { runAgent } = require('./groqClient');

async function revenueModelAgent(idea) {
  return await runAgent(`
Suggest revenue models for this startup: "${idea}"

Return a JSON object:
{
  "models": [
    {
      "type": "Subscription",
      "description": "how this model works for this startup",
      "projectedRevenue": "$X per year",
      "viabilityScore": 8,
      "pros": ["pro1", "pro2"],
      "cons": ["con1", "con2"]
    }
  ],
  "recommendedModel": "best model name",
  "breakEvenPoint": "X months",
  "year1Revenue": "$X",
  "year3Revenue": "$X"
}

Include 3 different revenue models.
`);
}

module.exports = { revenueModelAgent };
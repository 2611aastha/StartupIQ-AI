const { runAgent } = require('./groqClient');

async function marketResearchAgent(idea) {
  return await runAgent(`
Analyze the market for this startup idea: "${idea}"

Return a JSON object with exactly these fields:
{
  "marketSize": "description of TAM SAM SOM",
  "marketSizeValue": "$X billion",
  "cagr": "X%",
  "targetAudience": ["audience1", "audience2", "audience3"],
  "growthPotential": "High or Medium or Low",
  "industryTrends": ["trend1", "trend2", "trend3"],
  "timeToMarket": "X months",
  "summary": "2-3 sentence market overview"
}
`);
}

module.exports = { marketResearchAgent };
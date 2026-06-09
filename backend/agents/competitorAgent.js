const { runAgent } = require('./groqClient');

async function competitorAnalysisAgent(idea) {
  return await runAgent(`
Identify competitors for this startup: "${idea}"

Return a JSON object:
{
  "competitors": [
    {
      "name": "Company Name",
      "website": "domain.com",
      "strength": "High or Medium or Low",
      "marketShare": "X%",
      "weakness": "their main weakness",
      "differentiator": "what makes them unique"
    }
  ],
  "competitiveAdvantage": "how this startup can win",
  "marketGap": "the gap this startup can fill",
  "totalCompetitors": 5
}

Include 4 to 5 real competitors.
`);
}

module.exports = { competitorAnalysisAgent };
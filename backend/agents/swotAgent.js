const { runAgent } = require('./groqClient');

async function swotAgent(idea) {
  return await runAgent(`
Create a SWOT analysis for: "${idea}"

Return a JSON object:
{
  "strengths": ["s1", "s2", "s3", "s4"],
  "weaknesses": ["w1", "w2", "w3", "w4"],
  "opportunities": ["o1", "o2", "o3", "o4"],
  "threats": ["t1", "t2", "t3", "t4"],
  "overallScore": 78,
  "recommendation": "Go or Pivot or No-Go"
}

overallScore must be a number between 1 and 100.
`);
}

module.exports = { swotAgent };
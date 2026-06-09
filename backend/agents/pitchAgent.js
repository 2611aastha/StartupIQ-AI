const { runAgent } = require('./groqClient');

async function pitchAgent(idea) {
  return await runAgent(`
Create an investor pitch for: "${idea}"

Return a JSON object:
{
  "tagline": "one-line company description",
  "problem": "the core problem being solved",
  "solution": "your unique solution",
  "market": "market size and opportunity",
  "businessModel": "how you make money",
  "traction": "current traction or go-to-market plan",
  "competition": "competitive landscape and your edge",
  "team": "ideal founding team description",
  "financials": "key financial highlights",
  "ask": "how much funding and what it will be used for",
  "elevatorPitch": "a compelling 3-sentence elevator pitch"
}
`);
}

module.exports = { pitchAgent };
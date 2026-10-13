// SEC Form 4 Insider Trades API quick start (Node 18+ or any runtime with global fetch)
// Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades

const HOST = 'live-sec-form-4-insider-trades.p.rapidapi.com';
const API_KEY = 'YOUR_RAPIDAPI_KEY';

async function getInsiderTrades(ticker, limit = 50) {
  const url = new URL(`https://${HOST}/api/insider-trades`);
  url.searchParams.set('limit', String(limit));
  if (ticker) url.searchParams.set('ticker', ticker); // omit for the market-wide feed

  const response = await fetch(url, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': HOST,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  const data = await response.json(); // { results: [...] }
  return data.results;
}

getInsiderTrades('AAPL', 25)
  .then((filings) => {
    console.log(`Retrieved ${filings.length} Form 4 filings.`);
    for (const f of filings) {
      console.log(`${f.updated}  ${f.link}`);
    }
  })
  .catch((err) => console.error('Error fetching insider trades:', err));

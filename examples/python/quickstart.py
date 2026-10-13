"""SEC Form 4 Insider Trades API quick start (Python 3, requires `pip install requests`).

Get a free key:
https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades
"""

import requests

HOST = "live-sec-form-4-insider-trades.p.rapidapi.com"
API_KEY = "YOUR_RAPIDAPI_KEY"

HEADERS = {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
}


def fetch_insider_trades(ticker: str | None = None, limit: int = 50) -> list[dict]:
    """Return up to `limit` Form 4 filings, newest first. Omit ticker for the market-wide feed."""
    params: dict[str, str | int] = {"limit": limit}
    if ticker:
        params["ticker"] = ticker
    response = requests.get(
        f"https://{HOST}/api/insider-trades",
        headers=HEADERS,
        params=params,
        timeout=15,
    )
    response.raise_for_status()
    return response.json()["results"]


if __name__ == "__main__":
    filings = fetch_insider_trades("AAPL", limit=25)
    print(f"Retrieved {len(filings)} Form 4 filings.")
    for f in filings:
        print(f"{f['updated']}  {f['link']}")

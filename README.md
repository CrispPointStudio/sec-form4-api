# SEC Form 4 Insider Trades API — Insider Trading Filings as JSON

REST API for SEC Form 4 insider trading filings, straight from EDGAR. Get the latest insider buy and sell filings for any stock ticker, or a market-wide firehose of the newest Form 4s, as clean JSON with a link to each filing. Built for stock screeners, quant research, trading alerts, and fintech dashboards, with no EDGAR XML parsing required.

👉 **[Get a free API key on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades)**

---

## Quick Start

```bash
curl 'https://live-sec-form-4-insider-trades.p.rapidapi.com/api/insider-trades?ticker=AAPL' \
  -H 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  -H 'X-RapidAPI-Host: live-sec-form-4-insider-trades.p.rapidapi.com'
```

Full examples: [Python](examples/python/quickstart.py) · [JavaScript](examples/javascript/quickstart.js) · [curl](examples/curl.sh)

---

## Endpoint Reference

Base URL: `https://live-sec-form-4-insider-trades.p.rapidapi.com`

### `GET /api/insider-trades`

Returns the most recent Form 4 filings, newest first. With a `ticker`, returns filings for that issuer. Without one, returns the latest Form 4s filed across the whole market. EDGAR serves at most 100 filings per query, so that is the ceiling for `limit`.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `ticker` | string | No | — | Stock ticker, e.g. `AAPL`, `MSFT`, `TSLA`. Omit for the market-wide feed. |
| `limit` | integer | No | `50` | Maximum filings to return, 1 to 100. |

#### Response

A JSON object with a `results` array of filings.

| Field | Type | Description |
| :--- | :--- | :--- |
| `results` | array | Filing objects, see below |
| `results[].title` | string | EDGAR entry title. For a ticker query this is the form type and description. For the market-wide feed it names the reporting person or issuer. |
| `results[].updated` | string (date-time) | Filing timestamp, ISO 8601 with US Eastern offset |
| `results[].link` | string | URL of the filing index on sec.gov, which links to the full Form 4 document |

#### Sample Response

`GET /api/insider-trades?ticker=AAPL&limit=2`

```json
{
  "results": [
    {
      "title": "4  - Statement of changes in beneficial ownership of securities",
      "updated": "2026-10-08T18:30:32-04:00",
      "link": "https://www.sec.gov/Archives/edgar/data/320193/000114036126039158/0001140361-26-039158-index.htm"
    },
    {
      "title": "4  - Statement of changes in beneficial ownership of securities",
      "updated": "2026-10-05T18:42:45-04:00",
      "link": "https://www.sec.gov/Archives/edgar/data/320193/000114036126038674/0001140361-26-038674-index.htm"
    }
  ]
}
```

`GET /api/insider-trades?limit=2` (market-wide)

```json
{
  "results": [
    {
      "title": "4 - FRIEDMAN BRIAN P (0001275002) (Reporting)",
      "updated": "2026-10-09T21:56:14-04:00",
      "link": "https://www.sec.gov/Archives/edgar/data/1275002/000121465926012761/0001214659-26-012761-index.htm"
    },
    {
      "title": "4 - Jefferies Financial Group Inc. (0000096223) (Issuer)",
      "updated": "2026-10-09T21:56:14-04:00",
      "link": "https://www.sec.gov/Archives/edgar/data/96223/000121465926012761/0001214659-26-012761-index.htm"
    }
  ]
}
```

---

## Pricing

All plans are billed through RapidAPI. Full details on the [pricing tab](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades/pricing).

| Plan | Price | Requests / month | Rate limit |
| :--- | :--- | :--- | :--- |
| Basic | Free | 100 | 1,000 per hour |
| Pro | $9.99 / month | 10,000 | — |
| Ultra | $29.99 / month | 50,000 | — |

---

## Data Source

Data comes from the SEC's [EDGAR](https://www.sec.gov/edgar/search-and-access) filing system. Form 4 is the statement corporate insiders must file within two business days of a change in their beneficial ownership.

**Refresh frequency: real-time.** Responses reflect EDGAR as it stands at the moment of the request. Filings appear as soon as EDGAR accepts them.

## License

The example code in this repository is released under the [MIT License](LICENSE). The API service itself and the data it returns are governed by the RapidAPI terms of service and SEC data terms, not by this license.

---

👉 **[Subscribe on RapidAPI](https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades)** · Built by Crisp Point Studio

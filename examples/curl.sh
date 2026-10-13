#!/usr/bin/env bash
# SEC Form 4 Insider Trades API quick start (curl)
# Get a free key: https://rapidapi.com/crisp-point-studio-crisp-point-studio-default/api/live-sec-form-4-insider-trades

curl --request GET \
  --url 'https://live-sec-form-4-insider-trades.p.rapidapi.com/api/insider-trades?ticker=AAPL&limit=25' \
  --header 'X-RapidAPI-Key: YOUR_RAPIDAPI_KEY' \
  --header 'X-RapidAPI-Host: live-sec-form-4-insider-trades.p.rapidapi.com'

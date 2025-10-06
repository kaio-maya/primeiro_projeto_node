// TradingViewWidget.jsx
"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
    if (container.current) {

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbols": [
              {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500 Index"
              },
              {
                "proName": "FOREXCOM:NSXUSD",
                "title": "US 100 Cash CFD"
              },
              {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR to USD"
              },
              {
                "proName": "BITSTAMP:BTCUSD",
                "title": "Bitcoin"
              },
              {
                "proName": "BITSTAMP:ETHUSD",
                "title": "Ethereum"
              },
              {
                "proName": "BMFBOVESPA:SOY1!",
                "title": "SOJA"
              }
            ],
            "colorTheme": "light",
            "locale": "br",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": true,
            "displayMode": "adaptive"
          }`;
        container.current.appendChild(script);
        return () => {
            if (container.current) {
                container.current.innerHTML = '';
            }
        }
    }
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);

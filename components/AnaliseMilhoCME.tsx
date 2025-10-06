// TradingViewWidget.jsx
"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
    if (container.current) {

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbol": "MATBAROFEX:CRN.CME1!",
            "chartOnly": false,
            "dateRange": "12M",
            "noTimeScale": false,
            "colorTheme": "dark",
            "isTransparent": false,
            "locale": "br",
            "width": "100%",
            "autosize": true,
            "height": "100%"
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
      <div className="tradingview-widget-copyright"><a href="https://br.tradingview.com/symbols/MATBAROFEX-CRN.CME1!/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);

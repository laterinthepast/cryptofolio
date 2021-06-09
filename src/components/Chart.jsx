import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Chart = () => {



    return (
        <div className="chart-wrapper">
            
            
            <TradingViewWidget
                symbol="BINANCE:BTCPERP"
                theme={Themes.LIGHT}
                locale="eng"
                autosize
            />

        </div>

    )
}

export default Chart

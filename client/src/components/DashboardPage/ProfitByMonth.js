

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ProfitByMonth({
    filteredTransactionsList,
    janRevenue,
    febRevenue,
    marRevenue,
    aprRevenue,
    mayRevenue,
    junRevenue,
    julRevenue,
    augRevenue,
    sepRevenue,
    octRevenue,
    novRevenue,
    decRevenue,
    janCOGS,
    febCOGS,
    marCOGS,
    aprCOGS,
    mayCOGS,
    junCOGS,
    julCOGS,
    augCOGS,
    sepCOGS,
    octCOGS,
    novCOGS,
    decCOGS,

    janOPEX,
    febOPEX,
    marOPEX,
    aprOPEX,
    mayOPEX,
    junOPEX,
    julOPEX,
    augOPEX,
    sepOPEX,
    octOPEX,
    novOPEX,
    decOPEX,
}) {



    let dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dataY = [
        janRevenue - janCOGS - janOPEX,
        febRevenue - febCOGS - febOPEX,
        marRevenue - marCOGS - marOPEX,
        aprRevenue - aprCOGS - aprOPEX,
        mayRevenue - mayCOGS - mayOPEX,
        junRevenue - junCOGS - junOPEX,
        julRevenue - julCOGS - julOPEX,
        augRevenue - augCOGS - augOPEX,
        sepRevenue - sepCOGS - sepOPEX,
        octRevenue - octCOGS - octOPEX,
        novRevenue - novCOGS - novOPEX,
        decRevenue - decCOGS - decOPEX]

    // console.log(filteredTransactionsList[0]['date'].splice(5, 7));

    // function logDates() {
    //     if (filteredTransactionsList.length !== 0) {
    //         console.log(filteredTransactionsList[0]['date'].splice(5, 7))
    //     }
    // }

    // console.log(logDates())




    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: dataX,
                    scaleType: 'band',
                    categoryGapRatio: 0.5,
                    // barGapRatio: 0.4


                },
            ]}
            yAxis={[{
                colorMap: {
                    type: 'piecewise',
                    thresholds: [0],
                    colors: ['red', 'green'],
                }
            }]}
            grid={{ horizontal: true }}
            series={[
                {
                    data: dataY,
                },
            ]}
            // width={2090}
            height={300}

        />
    );
}
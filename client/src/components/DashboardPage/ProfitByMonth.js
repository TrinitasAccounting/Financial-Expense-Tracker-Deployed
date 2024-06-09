

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ProfitByMonth() {

    let dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dataY = [12, 5, -2, 7, 8, 2, -8, 19, 4, 1, 5, -2]



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


import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function COGSMonthChart({
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
}) {

    let dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let dataY = [janCOGS, febCOGS, marCOGS, aprCOGS, mayCOGS, junCOGS, julCOGS, augCOGS, sepCOGS, octCOGS, novCOGS, decCOGS]




    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: dataX }]}
            series={[{ data: dataY }]}
            // width={500}
            height={400}
        />
    );
}
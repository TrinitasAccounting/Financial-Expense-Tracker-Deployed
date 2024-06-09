

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function COGSMonthChart() {

    let dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let dataY = [200, 100, 50, 92, 65, 75, 25, 175, 48, 115, 200, 37]




    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: dataX }]}
            series={[{ data: dataY }]}
            // width={500}
            height={400}
        />
    );
}


import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ExpensesDonutChart() {

    let dataArray = [
        { value: 200, label: 'Meals & Entertainment' },
        { value: 50, label: 'Job Supplies' },
        { value: 125, label: 'Office Expenses' },
        { value: 400, label: 'Insurance' },

    ]



    return (
        <PieChart
            series={[
                {
                    data: dataArray
                },
            ]}
            // width={700}
            height={300}
        />
    );
}
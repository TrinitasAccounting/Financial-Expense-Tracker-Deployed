

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ExpensesDonutChart({
    allExpensesSummedByCategoriesObject
}) {

    // let dataArray = [
    //     { value: 200, label: 'Meals & Entertainment' },
    //     { value: 50, label: 'Job Supplies' },
    //     { value: 125, label: 'Office Expenses' },
    //     { value: 400, label: 'Insurance' },
    // ]

    // console.log(allExpensesSummedByCategoriesObject);

    let dataArray = []
    Object.keys(allExpensesSummedByCategoriesObject).forEach((key, index) => {
        dataArray.push({ value: allExpensesSummedByCategoriesObject[key], label: key })
    })


    const palette = ['#8BC1F7', '#38812F', '#F9E0A2', '#F4B678', '#009596', '#06C', '#38812F', '#EF9234', '#A30000'];






    return (
        <PieChart
            colors={palette}
            series={[
                {
                    data: dataArray,
                    innerRadius: 50,
                    outerRadius: 96,
                    paddingAngle: 0,
                    cornerRadius: 5,
                    startAngle: -0,
                    endAngle: 360,
                    cx: 150,
                    cy: 150,
                },
            ]}
            // width={700}
            height={300}
            margin={{ left: 0, right: 0 }}
        />
    );
}
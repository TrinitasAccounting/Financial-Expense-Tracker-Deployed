

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function TaxLineChart({
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


    let dataX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    let taxesLiabilityByMonth = [
        (janRevenue - janCOGS - janOPEX) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX) + (augRevenue - augCOGS - augOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX) + (augRevenue - augCOGS - augOPEX) + (sepRevenue - sepCOGS - sepOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX) + (augRevenue - augCOGS - augOPEX) + (sepRevenue - sepCOGS - sepOPEX) + (octRevenue - octCOGS - octOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX) + (augRevenue - augCOGS - augOPEX) + (sepRevenue - sepCOGS - sepOPEX) + (octRevenue - octCOGS - octOPEX) + (novRevenue - novCOGS - novOPEX)) * 0.3,
        ((janRevenue - janCOGS - janOPEX) + (febRevenue - febCOGS - febOPEX) + (marRevenue - marCOGS - marOPEX) + (aprRevenue - aprCOGS - aprOPEX) + (mayRevenue - mayCOGS - mayOPEX) + (junRevenue - junCOGS - junOPEX) + (julRevenue - julCOGS - julOPEX) + (augRevenue - augCOGS - augOPEX) + (sepRevenue - sepCOGS - sepOPEX) + (octRevenue - octCOGS - octOPEX) + (novRevenue - novCOGS - novOPEX) + (decRevenue - decCOGS - decOPEX)) * 0.3
    ];






    return (
        <LineChart
            xAxis={[
                {
                    id: 'Years',
                    data: dataX,
                    // scaleType: 'time',
                    scaleType: 'band',
                    // valueFormatter: (date) => date.getFullYear().toString(),
                },
            ]}
            series={[
                {
                    id: 'tax',
                    label: 'Corporate + Personal Tax',
                    data: taxesLiabilityByMonth,
                    stack: 'total',
                    area: true,
                    showMark: false,
                    // color: '#009bff'
                    color: '#598dfa'
                },
                // {
                //     id: 'Germany',
                //     label: 'German GDP per capita',
                //     data: dataPersonalTax,
                //     stack: 'total',
                //     area: true,
                //     showMark: false,
                // },
                // {
                //     id: 'United Kingdom',
                //     label: 'UK GDP per capita',
                //     data: UKGDPperCapita,
                //     stack: 'total',
                //     area: true,
                //     showMark: false,
                // },
            ]}
            // width={600}
            height={360}
            margin={{ left: 70, }}
        />
    );
}
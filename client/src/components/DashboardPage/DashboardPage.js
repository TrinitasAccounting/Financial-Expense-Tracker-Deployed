
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

import YearFilter from "./YearFilter";

import ProfitByMonth from "./ProfitByMonth";
import ExpensesBarChart from "./ExpensesBarChart";
import COGSMonthChart from "./COGSMonthChart";
import ExpensesDonutChart from "./ExpensesDonutChart";
import TaxLineChart from "./TaxLineChart";


// Defining dynamic dates for the transaction filters
let currentDate = new Date()

let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth() + 1

// console.log(currentMonth)

// List of years that can be filtered by
let yearsList = []
let j = 0
for (let i = currentYear; i >= 2022; i--) {
    j = j + 1
    yearsList.push({ id: j, year: i })
}





function DashboardPage() {

    const { transactionsList, revenueCategories, COGSCategories, opexCategories } = useOutletContext()


    const [selected, setSelected] = useState(yearsList[0])



    // Filtering the transactions list by the year
    let filteredTransactionsList = transactionsList.filter((trans) => {
        return (trans.date.slice(0, 4) === String(selected.year))
    })





    // Dashboard display top box value calculations__________________________________________________
    // Calculating the Revenue for the display
    let revenueTransactions = filteredTransactionsList.filter((trans) => {
        return (revenueCategories.includes(trans.category))
    })

    let totalRevenue = revenueTransactions.reduce((acc, obj) => { return acc + obj.amount }, 0)


    // Calculating the Cost of Goods Sold for the display
    let COGSTransactions = filteredTransactionsList.filter((trans) => {
        return (COGSCategories.includes(trans.category))
    })

    let totalCOGS = COGSTransactions.reduce((acc, obj) => { return acc + obj.amount }, 0)

    // console.log(totalCOGS);

    // Calculating the Operating Expenses for the display
    let opexTransactions = filteredTransactionsList.filter((trans) => {
        return (opexCategories.includes(trans.category))
    })

    let totalOPEX = opexTransactions.reduce((acc, obj) => { return acc + obj.amount }, 0)

    // Calculating EBITDA for the display
    let totalEBITDA = totalRevenue - totalCOGS - totalOPEX;

    // ________________________________________________________________________________________________



    // Finding the Revenue amounts by month____________________________________________________________________

    // Revenue Calculations (trying to save memory by having them .reduce in the same line instead of storing another array in memory)
    let janRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '01' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let febRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '02' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let marRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '03' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let aprRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '04' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let mayRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '05' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let junRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '06' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let julRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '07' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let augRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '08' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let sepRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '09' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let octRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '10' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let novRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '11' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let decRevenue = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '12' && revenueCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)


    // ___________________________________________________________________________________________________________


    // console.log(janRevenue);
    // console.log(febRevenue);
    // console.log(marRevenue);
    // console.log(aprRevenue);
    // console.log(mayRevenue);
    // console.log(junRevenue);
    // console.log(julRevenue);
    // console.log(augRevenue);
    // console.log(sepRevenue);
    // console.log(octRevenue);
    // console.log(novRevenue);
    // console.log(decRevenue);

    // Finding the COGS amounts by month____________________________________________________________________

    // COGS Calculations (trying to save memory by having them .reduce in the same line instead of storing another array in memory)
    let janCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '01' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let febCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '02' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let marCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '03' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let aprCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '04' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let mayCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '05' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let junCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '06' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let julCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '07' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let augCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '08' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let sepCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '09' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let octCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '10' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let novCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '11' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let decCOGS = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '12' && COGSCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)


    // console.log(janCOGS);
    // console.log(febCOGS);
    // console.log(marCOGS);
    // console.log(aprCOGS);
    // console.log(mayCOGS);
    // console.log(junCOGS);
    // console.log(julCOGS);
    // console.log(augCOGS);
    // console.log(sepCOGS);
    // console.log(octCOGS);
    // console.log(novCOGS);
    // console.log(decCOGS);


    // ___________________________________________________________________________________________________________


    // Finding the Operating Expenses (OPEX) amounts by month____________________________________________________________________

    // OPEX Calculations (trying to save memory by having them .reduce in the same line instead of storing another array in memory)
    let janOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '01' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let febOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '02' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let marOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '03' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let aprOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '04' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let mayOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '05' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let junOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '06' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let julOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '07' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let augOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '08' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let sepOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '09' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let octOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '10' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let novOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '11' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)

    let decOPEX = filteredTransactionsList.filter((trans) => {
        return (String(trans.date.slice(5, 7)) === '12' && opexCategories.includes(trans.category))
    })
        .reduce((acc, obj) => { return acc + obj.amount }, 0)


    // console.log(janOPEX);
    // console.log(febOPEX);
    // console.log(marOPEX);
    // console.log(aprOPEX);
    // console.log(mayOPEX);
    // console.log(junOPEX);
    // console.log(julOPEX);
    // console.log(augOPEX);
    // console.log(sepOPEX);
    // console.log(octOPEX);
    // console.log(novOPEX);
    // console.log(decOPEX);


    // ___________________________________________________________________________________________________________






    return (
        <div>
            <div className="w-[200px]" >
                <YearFilter selected={selected} setSelected={setSelected} yearsList={yearsList} />
            </div>
            <div className="m-4 grid grid-cols-1 gap-5 sm:grid-cols-12">

                <div className="min-h-[150px] rounded-[20px] shadow bg-white sm:col-span-3">
                    <div className="min-h-[35px] rounded-lg shadow text-center font-semibold sm:text-3xl sm:col-span-3">
                        <h1>Revenue YTD</h1>
                    </div>
                    <div className="h-[115px] rounded-lg shadow  sm:col-span-1 ">
                        <div className="min-h-[20px] rounded-lg sm:col-span-1"></div>
                        <h1 className="flex lg:text-6xl md:text-4xl text-5xl justify-center">$ {totalRevenue.toFixed(2)}</h1>
                    </div>
                </div>

                <div className="min-h-[150px] rounded-[20px] shadow bg-white sm:col-span-3">
                    <div className="min-h-[35px] rounded-lg shadow font-semibold text-center sm:text-3xl sm:col-span-3">
                        <h1>COGS</h1>
                    </div>
                    <div className="h-[115px] rounded-lg shadow  sm:col-span-1 ">
                        <div className="min-h-[20px] rounded-lg sm:col-span-1"></div>
                        <h1 className="flex lg:text-6xl md:text-4xl text-5xl justify-center">$ {totalCOGS.toFixed(2)}</h1>
                    </div>
                </div>

                <div className="min-h-[150px] rounded-[20px] shadow bg-white sm:col-span-3">
                    <div className="min-h-[35px] rounded-lg font-semibold shadow text-center sm:text-3xl sm:col-span-3">
                        <h1>Operating Expenses</h1>
                    </div>
                    <div className="h-[115px] rounded-lg shadow  sm:col-span-1 ">
                        <div className="min-h-[20px] rounded-lg sm:col-span-1"></div>
                        <h1 className="flex lg:text-6xl md:text-4xl text-5xl justify-center">$ {totalOPEX.toFixed(2)}</h1>
                    </div>
                </div>

                <div className="min-h-[150px] rounded-[20px] shadow bg-white sm:col-span-3">
                    <div className="min-h-[35px] rounded-lg shadow font-semibold text-center sm:text-3xl sm:col-span-3">
                        <h1>EBITDA</h1>
                    </div>
                    <div className="h-[115px] rounded-lg shadow  sm:col-span-1 ">
                        <div className="min-h-[20px] rounded-lg sm:col-span-1"></div>
                        <h1 className="flex lg:text-6xl md:text-4xl text-5xl justify-center">$ {totalEBITDA.toFixed(2)}</h1>
                    </div>
                </div>

            </div>


            {/* Middle of the page, full screen horizontal div */}
            <div className="m-4 grid grid-cols-1 gap-10 sm:grid-cols-12">
                <div className="min-h-[350px] rounded-lg shadow bg-white sm:col-span-12">
                    <div className="min-h-[25px] rounded-lg shadow font-semibold text-center sm:text-2xl sm:col-span-3">
                        <h1>Net Profit per Month</h1>
                    </div>
                    {/* <h1>Income - Expenses</h1> */}
                    <div >
                        <ProfitByMonth
                            filteredTransactionsList={filteredTransactionsList}
                            janRevenue={janRevenue}
                            febRevenue={febRevenue}
                            marRevenue={marRevenue}
                            aprRevenue={aprRevenue}
                            mayRevenue={mayRevenue}
                            junRevenue={junRevenue}
                            julRevenue={julRevenue}
                            augRevenue={augRevenue}
                            sepRevenue={sepRevenue}
                            octRevenue={octRevenue}
                            novRevenue={novRevenue}
                            decRevenue={decRevenue}

                            janCOGS={janCOGS}
                            febCOGS={febCOGS}
                            marCOGS={marCOGS}
                            aprCOGS={aprCOGS}
                            mayCOGS={mayCOGS}
                            junCOGS={junCOGS}
                            julCOGS={julCOGS}
                            augCOGS={augCOGS}
                            sepCOGS={sepCOGS}
                            octCOGS={octCOGS}
                            novCOGS={novCOGS}
                            decCOGS={decCOGS}

                            janOPEX={janOPEX}
                            febOPEX={febOPEX}
                            marOPEX={marOPEX}
                            aprOPEX={aprOPEX}
                            mayOPEX={mayOPEX}
                            junOPEX={junOPEX}
                            julOPEX={julOPEX}
                            augOPEX={augOPEX}
                            sepOPEX={sepOPEX}
                            octOPEX={octOPEX}
                            novOPEX={novOPEX}
                            decOPEX={decOPEX}

                        />
                    </div>
                </div>


            </div>


            {/* Bottom right grid box */}
            <div className="m-4 grid grid-cols-1 gap-5 sm:grid-cols-12">
                <div className="min-h-[500px] rounded-lg shadow bg-white sm:col-span-4">
                    {/* <h1>Top 15 Expenses</h1> */}
                    <div className="min-h-[25px] rounded-lg shadow font-semibold text-center sm:text-2xl sm:col-span-3">
                        <h1>Top 15 Expenses</h1>
                    </div>
                    <ExpensesBarChart />
                </div>
                {/* <div className="min-h-[150px] rounded-lg shadow bg-red-700 col-span-1"></div> */}
                <div className="min-h-[500px] rounded-lg shadow bg-teal-100 sm:col-span-8 ">
                    <div className="m-1 grid grid-cols-1 gap-5 sm:grid-cols-1">
                        <div className="min-h-[300px] rounded-lg grid grid-cols-2 gap-5 shadow sm:col-span-8">
                            <div className="bg-indigo-400 sm:col-span-1 rounded-lg">
                                <h1>Estimated Tax Liabiltiy line chart (Coporate Tax Rate && Personal Tax Rate)</h1>
                                <TaxLineChart />
                            </div>
                            <div className="bg-white sm:col-span-1 rounded-lg">
                                <h1>Expense Donut (All Expenses)</h1>
                                <ExpensesDonutChart />
                            </div>
                            {/* <div className="m-1 grid grid-cols-1 gap-5 sm:grid-cols-1">
                            </div> */}
                            {/* Code inside of here _____________________________________________________Donut Chart & Estimate Tax Liabiltiy*/}
                            {/* <h1>Box 7</h1> */}
                        </div>
                        {/* <div className="min-h-[150px] rounded-lg shadow bg-red-700 col-span-1"></div> */}
                        <div className="min-h-[400px] rounded-lg shadow bg-purple-500 sm:col-span-8">
                            {/* code inside of here _____________________________________________________ COGS Monthly Bar chart*/}
                            <h1>COGS Monthly Bar Chart</h1>
                            <COGSMonthChart />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashboardPage;
















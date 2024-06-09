
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

// console.log(yearsList)





function DashboardPage() {

    const { transactionsList, revenueCategories, COGSCategories, opexCategories } = useOutletContext()


    const [selected, setSelected] = useState(yearsList[0])

    // Filtering the transactions list by the year
    let filteredTransactionsList = transactionsList.filter((trans) => {
        return (trans.date.slice(0, 4) === String(selected.year))
    })

    // let test = transactionsList[0].date.slice(0, 4);

    // console.log(filteredTransactionsList);



    // Dashboard display top box value calculations__________________________________________
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
                        <ProfitByMonth />
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
















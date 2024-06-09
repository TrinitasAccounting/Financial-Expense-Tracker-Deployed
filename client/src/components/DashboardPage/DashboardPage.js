
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



    // Finding the amounts by month
    let janRevenue = 0
    let febRevenue = 0
    let marRevenue = 0
    let aprRevenue = 0
    let mayRevenue = 0
    let junRevenue = 0
    let julRevenue = 0
    let augRevenue = 0
    let sepRevenue = 0
    let octRevenue = 0
    let novRevenue = 0
    let decRevenue = 0



    function updateMonthlyRevenue(filteredTransactionsList) {


        if (filteredTransactionsList.length === 0) {
            janRevenue = 0
            febRevenue = 0
            marRevenue = 0
            aprRevenue = 0
            mayRevenue = 0
            junRevenue = 0
            julRevenue = 0
            augRevenue = 0
            sepRevenue = 0
            octRevenue = 0
            novRevenue = 0
            decRevenue = 0
            return ('test')
        }
        else (filteredTransactionsList.map((trans) => {
            if (String(trans.date.slice(5, 7)) === '01' && revenueCategories.includes(trans.category)) {
                janRevenue = janRevenue + trans.amount
                return (janRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '02' && revenueCategories.includes(trans.category)) {
                febRevenue = febRevenue + trans.amount
                return (febRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '03' && revenueCategories.includes(trans.category)) {
                marRevenue = marRevenue + trans.amount
                return (marRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '04' && revenueCategories.includes(trans.category)) {
                aprRevenue = aprRevenue + trans.amount
                return (aprRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '05' && revenueCategories.includes(trans.category)) {
                mayRevenue = mayRevenue + trans.amount
                return (mayRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '06' && revenueCategories.includes(trans.category)) {
                junRevenue = junRevenue + trans.amount
                return (junRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '07' && revenueCategories.includes(trans.category)) {
                julRevenue = julRevenue + trans.amount
                return (julRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '08' && revenueCategories.includes(trans.category)) {
                augRevenue = augRevenue + trans.amount
                return (augRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '09' && revenueCategories.includes(trans.category)) {
                sepRevenue = sepRevenue + trans.amount
                return (sepRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '10' && revenueCategories.includes(trans.category)) {
                octRevenue = octRevenue + trans.amount
                return (octRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '11' && revenueCategories.includes(trans.category)) {
                novRevenue = novRevenue + trans.amount
                return (novRevenue)
            }
            else if (String(trans.date.slice(5, 7)) === '12' && revenueCategories.includes(trans.category)) {
                decRevenue = decRevenue + trans.amount
                return (decRevenue)
            }
        }))
    }
    // else { console.log(filteredTransactionsList[0].date.slice(5, 7)) }

    console.log(janRevenue);
    // console.log(febRevenue);
    // console.log(marRevenue);
    // console.log(aprRevenue);






    return (
        <div>
            <div className="w-[200px]" >
                <YearFilter selected={selected} setSelected={setSelected} yearsList={yearsList} updateMonthlyRevenue={updateMonthlyRevenue} />
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
                        <ProfitByMonth filteredTransactionsList={filteredTransactionsList} />
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
















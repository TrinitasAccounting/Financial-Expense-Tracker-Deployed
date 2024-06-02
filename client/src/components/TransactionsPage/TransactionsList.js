
import { useState } from "react";
import AddTransactionSlideOver from "./AddTransactionSlideOver";


export default function TransactionsList({ transactionsList, categoryOptions }) {

    const [transactionSlideOverOpen, setTransactionSlideOverOpen] = useState(false)

    //Changing the state to open or close the slide over for transaction add
    function openCloseTransactionSlideOver() {
        return (
            setTransactionSlideOverOpen(transactionSlideOverOpen => !transactionSlideOverOpen)
        )
    }



    console.log(categoryOptions);

    // const people = [
    //     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //     { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    //     // More people...
    // ]

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Transaction Ledger</h1>
                    {/* <p className="mt-2 text-sm text-gray-700">
                        Transaction Ledger
                    </p> */}
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        transactionSlideOverOpen={transactionSlideOverOpen}
                        setTransactionSlideOverOpen={setTransactionSlideOverOpen}
                        onClick={openCloseTransactionSlideOver}
                    >
                        Add Transaction
                    </button>
                </div>
            </div>


            {/* This is what shows when the "Add Transactions" button is clicked. Slide over component is passed props here */}
            {transactionSlideOverOpen ?
                <div>
                    <AddTransactionSlideOver transactionSlideOverOpen={transactionSlideOverOpen} openCloseTransactionSlideOver={openCloseTransactionSlideOver} />
                </div>

                :

                <>
                </>
            }

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Date
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Description
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Category
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Amount
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {transactionsList.map((trans) => (
                                        <tr key={trans.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {trans.date}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trans.description}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trans.category}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trans.amount}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <a href="/" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit<span className="sr-only">, {trans.id}</span>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    )
}

import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddTransactionSlideOver from "./AddTransactionSlideOver";
import DromoUploader from "dromo-uploader-react"


import DeleteButton from "./ButtonForDelete";
import EditTransactionPopUp from "./EditTransactionPopUp";
// import CSVImporter from "./CSVImport";


const people = [
    // { id: 1, name: 'Sales' },
    // { id: 2, name: 'Advertising & Marketing' },
    // { id: 3, name: 'Office Expenses' },
    // { id: 4, name: 'Meals & Entertainment' },
    // { id: 5, name: 'Job Supplies' },
    // { id: 6, name: 'Travel Expenses' },
    // { id: 7, name: 'Labor Expense' },
    // { id: 8, name: 'Rent & Lease' },
    // { id: 9, name: 'Insurance' },
    // { id: 10, name: 'Software & Subscriptions' },
    // { id: 11, name: 'Gas & Fuel' },
    { id: 1, category: 'Gas & Fuel' },
    { id: 2, category: 'Sales' },
    { id: 3, category: 'Meals & Entertainment' },
    { id: 4, category: 'Insurance' },
]




export default function TransactionsList({ transactionsList, categoryOptions }) {

    const [transactionSlideOverOpen, setTransactionSlideOverOpen] = useState(false);

    const [selected, setSelected] = useState(people[0])


    const { deleteTransaction, onUpdateTransaction, chartOfAccountsList } = useOutletContext();



    //Changing the state to open or close the slide over for transaction add
    function openCloseTransactionSlideOver() {
        return (
            setTransactionSlideOverOpen(transactionSlideOverOpen => !transactionSlideOverOpen)
        )
    }


    // Edditing a Transaction__________________________________________________________
    const [editTransaction, setEditTransaction] = useState(false);

    const [editForm, setEditForm] = useState({
        id: "",
        date: "",
        description: "",
        category: "",
        amount: ""
    })

    // To show or not show the edit transaction
    function openCloseEditTransaction(transaction) {
        if (transaction.id === editForm.id) {
            setEditTransaction(editTransaction => !editTransaction)
        }
        else if (editTransaction === false) {
            setEditTransaction(editTransaction => !editTransaction)
        }
        else { setEditTransaction(editTransaction => !editTransaction) }
    }

    // capture the transaction you wish to edit and set to state
    function captureEdit(clickedTransaction) {
        let filtered = transactionsList.filter(transaction => transaction.id === clickedTransaction.id)
        setEditForm(filtered[0])
    }

    // handles the changes on the front end only
    function handleTransactionUpdate(updatedTransaction) {
        setEditTransaction(false)
        onUpdateTransaction(updatedTransaction)
    }





    // capture user input in edit form inputs
    function handleChange(event) {

        setEditForm({
            ...editForm, [event.target.name]: event.target.value
        })
    }



    // handling the dropdown menu change
    // let newSelectedCategory = { ...editForm }
    // function handleDropDownChange() {
    //     // newSelectedCategory.category = selected.category
    //     // setEditForm(newSelectedCategory)
    // }

    // ______________________________________________________________________________________


    // Setting the dropdown menu initial state on click of edit
    function clickOfEditSelected(editFormData) {

        setSelected({ id: editFormData.id, date: editFormData.date, description: editFormData.description, category: editFormData.category, amount: editFormData.amount })
    }


    // const dromo = new DromoUploader("3badce43-0fc9-4440-8f9d-840f2de07713", "2205df5e-4fde-41d1-8fb7-5401be84b7a6");



    // Stting up the category dropdown list from the chart of accounts table model________________
    let categoryAccountsList = chartOfAccountsList.map((trans) => {
        return ({ id: trans.id, category: trans.name, account_type: trans.account_type })
    })


    // Sorting TransactionList but have it commented out as to save memory space on the computer. It is run at the same time that the map function is iterating
    // let sortedTransactionList = transactionsList.sort((a, b) => new Date(a.date.slice(0, 10)) - new Date(b.date.slice(0, 10)))










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

                    {/* <CSVImporter /> */}



                    <DromoUploader
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        licenseKey='3badce43-0fc9-4440-8f9d-840f2de07713'
                        schemaName='Import Transactions'
                        user={{ id: 'jimUser' }}
                        developmentMode={true}

                    // onResults={(response, metadata) =>
                    //     // Connect to our database
                    //     console.log(response, metadata)
                    // }
                    >
                        Import from CSV
                    </DromoUploader>


                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">

                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        // transactionSlideOverOpen={transactionSlideOverOpen}
                        // setTransactionSlideOverOpen={setTransactionSlideOverOpen}
                        onClick={openCloseTransactionSlideOver}
                    >
                        Add Transaction
                    </button>
                </div>
            </div>


            {/* This is what shows when the "Add Transactions" button is clicked. Slide over component is passed props here */}
            {
                transactionSlideOverOpen ?
                    <div>
                        <AddTransactionSlideOver transactionSlideOverOpen={transactionSlideOverOpen} openCloseTransactionSlideOver={openCloseTransactionSlideOver} categoryAccountsList={categoryAccountsList} people={people} />
                    </div>

                    :

                    <>
                    </>
            }


            {/* Edit a transactiong component and passed props */}
            {
                openCloseEditTransaction ?
                    <div>
                        <EditTransactionPopUp editTransaction={editTransaction} openCloseEditTransaction={openCloseEditTransaction} editForm={editForm} handleTransactionUpdate={handleTransactionUpdate} handleChange={handleChange} selected={selected} setSelected={setSelected} categoryAccountsList={categoryAccountsList} people={people} />
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
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">


                                    {transactionsList.sort((a, b) => new Date(a.date.slice(0, 10)) - new Date(b.date.slice(0, 10))).map((trans) => (
                                        <tr key={trans.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {trans.date}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trans.description}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {trans.category}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{trans.amount}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                {/* <a className="text-red-600 hover:text-red-900">
                                                    Delete<span className="sr-only">, {trans.id}</span>
                                                </a> */}
                                                <DeleteButton deleteTransaction={deleteTransaction} trans={trans} />
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                    onClick={() => {
                                                        captureEdit(trans)
                                                        openCloseEditTransaction(trans)
                                                        // clickOfEditSelected(trans)
                                                    }}
                                                >
                                                    Edit<span className="sr-only">, {trans.id}</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>







        </div >
    )
}
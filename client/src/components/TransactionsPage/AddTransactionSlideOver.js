
import { useOutletContext } from 'react-router-dom'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


// import DropdownMenu from './DropDownMenuForEditTransaction';


import React, { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
// import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

// const team = [
//     {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com',
//         href: '#',
//         imageUrl:
//             'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         name: 'Whitney Francis',
//         email: 'whitney.francis@example.com',
//         href: '#',
//         imageUrl:
//             'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         name: 'Leonard Krasner',
//         email: 'leonard.krasner@example.com',
//         href: '#',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         name: 'Floyd Miles',
//         email: 'floyd.miles@example.com',
//         href: '#',
//         imageUrl:
//             'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         name: 'Emily Selman',
//         email: 'emily.selman@example.com',
//         href: '#',
//         imageUrl:
//             'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
// ]

export default function AddTransactionSlideOver({ transactionSlideOverOpen, openCloseTransactionSlideOver, people }) {
    // const [open, setOpen] = useState(true)

    // the state for the date selected when adding a new product
    const [startDate, setStartDate] = useState(new Date());



    // Adding a new transaction form states and onChange functions_____
    const { addNewTransaction } = useOutletContext();

    // console.log(addNewTransaction);

    const [transactionFormData, setTransactionFormData] = useState({
        date: "",
        description: "",
        amount: "",
        category: ""
    })

    // updating form state function
    function updateTransactionFormData(event) {
        setTransactionFormData({ ...transactionFormData, date: startDate, [event.target.name]: event.target.value })

    }

    // function handleAddOnlyTransactionSubmit(event) {
    //     event.preventDefault()
    //     addNewTransaction(transactionFormData)

    //     setTransactionFormData({
    //         date: "",
    //         description: "",
    //         amount: "",
    //         category: ""
    //     })
    // }

    function handleAddAndCloseTransactionSubmit(event) {
        event.preventDefault()
        addNewTransaction(transactionFormData)


        setTransactionFormData({
            date: "",
            description: "",
            amount: "",
            category: ""
        })
        openCloseTransactionSlideOver()
    }













    return (
        <Transition show={transactionSlideOverOpen}>
            <Dialog className="relative z-10" onClose={openCloseTransactionSlideOver}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <TransitionChild
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <DialogPanel className="pointer-events-auto w-screen max-w-2xl">
                                    <form onSubmit={handleAddAndCloseTransactionSubmit} className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1">
                                            {/* Header */}
                                            <div className="min-h-[50px]">

                                            </div>
                                            <div className="bg-gray-50 px-4 py-9 sm:px-6">
                                                <div className="flex items-start justify-between space-x-3">
                                                    <div className="space-y-6">
                                                        <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                                            New Transactions
                                                        </DialogTitle>
                                                        <p className="text-sm text-gray-500">
                                                            Get started by filling in the information below to create your new project.
                                                        </p>
                                                    </div>
                                                    <div className="flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative text-gray-400 hover:text-gray-500"
                                                            onClick={openCloseTransactionSlideOver}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Divider container */}
                                            <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                                                {/* Project name */}
                                                <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                    <div>
                                                        <label
                                                            htmlFor="date"
                                                            className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                        >
                                                            Select Date
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        {/* <input
                                                            onChange={updateTransactionFormData}
                                                            value={transactionFormData.date}
                                                            type="text"
                                                            name="date"
                                                            id="date"
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        /> */}
                                                        <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                    </div>
                                                </div>

                                                {/* Project description */}
                                                <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                    <div>
                                                        <label
                                                            htmlFor="description"
                                                            className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                        >
                                                            Description
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <textarea
                                                            onChange={updateTransactionFormData}
                                                            value={transactionFormData.description}
                                                            id="description"
                                                            name="description"
                                                            rows={1}
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>


                                                <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                    <div>
                                                        <label
                                                            htmlFor="description"
                                                            className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                        >
                                                            Category
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2 mt-2" >

                                                        <select
                                                            // onChange={handleChange}
                                                            onChange={updateTransactionFormData}
                                                            id="category"
                                                            name="category"

                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                        >
                                                            {people.map((trans) => {
                                                                return (
                                                                    <option value={trans.category}>{trans.category}</option>
                                                                )

                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                                    <div>
                                                        <label
                                                            htmlFor="amount"
                                                            className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                        >
                                                            Amount
                                                        </label>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <textarea
                                                            onChange={updateTransactionFormData}
                                                            value={transactionFormData.amount}
                                                            id="amount"
                                                            name="amount"
                                                            rows={1}
                                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            defaultValue={''}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                                            <div className="flex justify-end space-x-3">
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                    onClick={openCloseTransactionSlideOver}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    // onClick={handleAddAndCloseTransactionSubmit}
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Add and Close
                                                </button>
                                                {/* <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Add
                                                </button> */}
                                            </div>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
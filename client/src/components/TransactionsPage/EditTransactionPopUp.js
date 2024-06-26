

// import { Fragment, useState } from 'react'
// import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

// import DropdownMenu from './DropDownMenuForEditTransaction'

export default function EditTransactionPopUp({ editTransaction, openCloseEditTransaction, editForm, handleTransactionUpdate, handleChange, selected, setSelected, categoryAccountsList, people, onlyInputAnIntegerChange }) {


    // State is being initially set in when the edit button is clicked on the "TransactionsList" page







    // edit form PATCH
    function handleEditForm(event) {
        event.preventDefault()
        fetch(`/server/transaction/${editForm.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm)
        })
            .then(res => res.json())
            .then(updatedTransaction => handleTransactionUpdate(updatedTransaction))
    }





    return (
        <Transition show={editTransaction}>
            <Dialog className="relative z-10 " onClose={openCloseEditTransaction}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-10 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center  sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={openCloseEditTransaction}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="sm:flex sm:items-start sm:grid-cols-12">

                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Edit Transaction
                                        </DialogTitle>

                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <label
                                                    htmlFor="description"
                                                    className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                >
                                                    Date
                                                </label>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <textarea
                                                    value={editForm.date}
                                                    onChange={handleChange}
                                                    id="description"
                                                    name="date"
                                                    rows={1}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                                />
                                            </div>
                                        </div>
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
                                                    value={editForm.description}
                                                    onChange={handleChange}

                                                    id="description"
                                                    name="description"
                                                    rows={1}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

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
                                            <div className="sm:col-span-2" >
                                                <div className="mt-2">
                                                    <select
                                                        onChange={handleChange}
                                                        id="category"
                                                        name="category"

                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    >
                                                        <option key={editForm.id} value={editForm.category}>{editForm.category}</option>
                                                        {categoryAccountsList.map((trans) => {
                                                            if (trans.category !== editForm.category) {
                                                                return (
                                                                    <option key={trans.id} value={trans.category}>{trans.category}</option>
                                                                )
                                                            }
                                                            else {
                                                                return (
                                                                    <>
                                                                    </>
                                                                )
                                                            }
                                                        })}
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                            <div>
                                                <label
                                                    htmlFor="description"
                                                    className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                                >
                                                    Amount
                                                </label>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <input
                                                    value={editForm.amount}
                                                    onChange={onlyInputAnIntegerChange}
                                                    type='number'
                                                    id="amount"
                                                    name="amount"
                                                    rows={1}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                    <button
                                        onClick={handleEditForm}
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-900 sm:ml-3 sm:w-auto"

                                    >
                                        Make Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-red-600 sm:mt-0 sm:w-auto"
                                        onClick={openCloseEditTransaction}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
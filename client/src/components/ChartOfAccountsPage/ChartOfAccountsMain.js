


import { useOutletContext } from 'react-router-dom'

import ChartOfAccountsTable from './ChartOfAccountsTable'
import { useState } from 'react'

import AddAccountSlideOver from './AddAccountSlideOver'





// import { Dialog, DialogPanel, Field, Label, Switch } from '@headlessui/react'
// import { Bars3Icon } from '@heroicons/react/20/solid'
// import {
//     BellIcon,
//     CreditCardIcon,
//     CubeIcon,
//     FingerPrintIcon,
//     UserCircleIcon,
//     UsersIcon,
//     XMarkIcon,
// } from '@heroicons/react/24/outline'

// const navigation = [
//     { name: 'Home', href: '#' },
//     { name: 'Invoices', href: '#' },
//     { name: 'Clients', href: '#' },
//     { name: 'Expenses', href: '#' },
// ]
// const secondaryNavigation = [
//     { name: 'General', href: '#', icon: UserCircleIcon, current: true },
//     { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
//     { name: 'Notifications', href: '#', icon: BellIcon, current: false },
//     { name: 'Plan', href: '#', icon: CubeIcon, current: false },
//     { name: 'Billing', href: '#', icon: CreditCardIcon, current: false },
//     { name: 'Team members', href: '#', icon: UsersIcon, current: false },
// ]

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

export default function ChartOfAccountsMain() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    const { chartOfAccountsList, setChartOfAccountsList } = useOutletContext()


    const [showNewAccountSlideOver, setShowNewAccountSlideOver] = useState(false);

    function openCloseNewAccountSlideOver() {
        setShowNewAccountSlideOver((showNewAccountSlideOver) => !showNewAccountSlideOver)
    }





    return (
        <>


            <div className="mx-auto max-w-7xl  lg:flex lg:gap-x-16 lg:px-8">

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">


                        <div>
                            <h2 className=" text-2xl font-semibold text-center leading-7 text-gray-900">Chart of Accounts</h2>
                            <p className="mt-1 mb-10 text-sm leading-6 text-center text-gray-500">Update any financial account category by clicking on the account</p>


                            <>
                                {showNewAccountSlideOver ?
                                    <div>

                                        <AddAccountSlideOver showNewAccountSlideOver={showNewAccountSlideOver} openCloseNewAccountSlideOver={openCloseNewAccountSlideOver} />

                                        <div className="opacity-25">
                                            <ChartOfAccountsTable chartOfAccountsList={chartOfAccountsList} setChartOfAccountsList={setChartOfAccountsList} />
                                        </div>
                                    </div>
                                    :
                                    <>
                                        <ChartOfAccountsTable chartOfAccountsList={chartOfAccountsList} setChartOfAccountsList={setChartOfAccountsList} />
                                    </>}
                            </>

                            <button type="button" onClick={openCloseNewAccountSlideOver} className="text-lg pt-7 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                <span aria-hidden="true">+</span> Add another bank
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
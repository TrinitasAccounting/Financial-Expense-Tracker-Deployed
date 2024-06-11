


import { useOutletContext } from 'react-router-dom'

import ChartOfAccountsTable from './ChartOfAccountsTable'





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

    return (
        <>
            {/* <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-1 items-center gap-x-6">
                        <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                        </button>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
                        {navigation.map((item, itemIdx) => (
                            <a key={itemIdx} href={item.href}>
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex flex-1 items-center justify-end gap-x-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your profile</span>
                            <img
                                className="h-8 w-8 rounded-full bg-gray-800"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
                        <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                            <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="-ml-0.5">
                                <a href="#" className="-m-1.5 block p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </DialogPanel>
                </Dialog>
            </header> */}

            <div className="mx-auto max-w-7xl  lg:flex lg:gap-x-16 lg:px-8">

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">


                        <div>
                            <h2 className=" text-2xl font-semibold text-center leading-7 text-gray-900">Chart of Accounts</h2>
                            <p className="mt-1 mb-10 text-sm leading-6 text-center text-gray-500">Update any financial account category by clicking on the account</p>

                            <ChartOfAccountsTable chartOfAccountsList={chartOfAccountsList} setChartOfAccountsList={setChartOfAccountsList} />

                            <button type="button" className="text-lg pt-7 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                <span aria-hidden="true">+</span> Add another bank
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
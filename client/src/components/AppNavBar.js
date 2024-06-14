
import HeadshotZoomed from '../images/HeadshotZoomed.png';


import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
// import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
    { name: 'Transaction Ledger', href: '/transactions', icon: UsersIcon, current: false },
    { name: 'Profile', href: '/profile', icon: FolderIcon, current: false },
    { name: 'Chart of Accounts', href: '/chartofaccounts', icon: FolderIcon, current: false },
    // { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
// const teams = [
//     // { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
//     // { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
//     // { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
// ]
// const userNavigation = [
//     // { name: 'Your profile', href: '#' },
//     // { name: 'Sign out', href: '#' },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function AppNavBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [transactionsList, setTransactionsList] = useState([]);

    const [chartOfAccountsList, setChartOfAccountsList] = useState([]);

    const [profileDetails, setProfileDetails] = useState([])



    let categoryOptions = ['Gas & Fuel', 'Meal & Entertainment', 'Sales']




    // fetching all transactions
    useEffect(() => {
        fetch('/transactionslist')
            .then(res => {
                if (res.ok) {
                    res.json().then(data => setTransactionsList(data))
                }
            })
    }, [])


    // POST for new transaction
    function addNewTransaction(newTransaction) {
        fetch('/transactionslist', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTransaction)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(newTransactionData => {
                        setTransactionsList([...transactionsList, newTransactionData])
                        // console.log(newTransactionData)

                    })
                }
                else if (res.status === 400) {
                    res.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else if (res.status === 401) {
                    res.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else {
                    res.json().then(() => alert("Error: Something went wrong"))
                }
            })
    }

    // Deleting a transaction
    function deleteTransaction(id) {
        fetch(`/server/transaction/${id}`, {
            method: "DELETE"
        })
            .then(res => {
                if (res.ok) {
                    setTransactionsList(transactions => transactions.filter(transaction => {
                        return transaction.id !== id
                    })

                    )
                }
                else if (res.status === 404) {
                    res.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
            })
    }

    // Updating the transaction in the state
    function onUpdateTransaction(updatedTransaction) {
        const updatedTransactions = transactionsList.map(
            transaction => {
                if (transaction.id === updatedTransaction.id) {
                    return updatedTransaction
                }
                else { return transaction }
            }
        )
        setTransactionsList(updatedTransactions)
    }




    // All fetches for the Chart of Accounts_______________________
    useEffect(() => {
        fetch('/server/chartofaccounts')
            .then(res => {
                if (res.ok) {
                    res.json().then(data => setChartOfAccountsList(data))
                }
            })
    }, [])

    // POST for new transaction
    function addNewChartOfAccount(newAccount) {
        fetch('/server/chartofaccounts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newAccount)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(newAccountData => {
                        setChartOfAccountsList([...chartOfAccountsList, newAccountData])
                        console.log(newAccountData)

                    })
                }
                else if (res.status === 400) {
                    res.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else if (res.status === 401) {
                    res.json().then(errorData => alert(`Error: ${errorData.error}`))
                }
                else {
                    res.json().then(() => alert("Error: Something went wrong"))
                }
            })
    }

    // _____________________________________________________________________________________


    // All fetches for the Profiles_________________________________________________________
    useEffect(() => {
        fetch('/server/profile_details')
            .then(res => {
                if (res.ok) {
                    res.json().then(data => setProfileDetails(data))
                }
            })
    }, [])

    // Updating the Profile in the state
    function onUpdateProfile(updatedProfile) {
        const updatedProfileArray = profileDetails.map(
            user => {
                if (user.id === updatedProfile.id) {
                    return updatedProfile
                }
                else { return user }
            }
        )
        setProfileDetails(updatedProfileArray)
    }

    // _____________________________________________________________________________________



    // Defining the category arrays that are dynamic
    // REVENUE CATEGORIES
    let notUsedCategories = []
    let revenueCategories = []
    chartOfAccountsList.map((account) => {
        if (account.account_type === 'Income') {
            return (revenueCategories.push(account.name))
        }
        else {
            return (notUsedCategories.push(account.account_type))
        }
    })

    // COGS CATEGORIES
    let COGSCategories = []
    chartOfAccountsList.map((account) => {
        if (account.account_type === 'Cost of Goods Sold') {
            return (COGSCategories.push(account.name))
        }
        else {
            return (notUsedCategories.push(account.account_type))
        }
    })

    // OPERATING EXPENSES CATEGORIES
    let opexCategories = []
    chartOfAccountsList.map((account) => {
        if (account.account_type === 'Operating Expense') {
            return (opexCategories.push(account.name))
        }
        else {
            return (notUsedCategories.push(account.account_type))
        }
    })








    return (
        <>

            <div>
                <Transition show={sidebarOpen}>
                    <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <TransitionChild
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </TransitionChild>

                        <div className="fixed inset-0 flex">
                            <TransitionChild
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <TransitionChild
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}


                                    {/* Color____________________________________________________________________________ */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-100 px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            {/* <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                                alt="Your Company"
                                            /> */}
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name} >
                                                                <a
                                                                    href={item.href}

                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-indigo-700 text-white'
                                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon

                                                                        className={classNames(
                                                                            item.current ? 'text-white' : 'text-indigo-200 group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                {/* <li>
                                                    <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                        {teams.map((team) => (
                                                            <li key={team.name}>
                                                                <a
                                                                    href={team.href}
                                                                    className={classNames(
                                                                        team.current
                                                                            ? 'bg-indigo-700 text-white'
                                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                                                        {team.initial}
                                                                    </span>
                                                                    <span className="truncate">{team.name}</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li> */}
                                                {/* <li className="mt-auto">
                                                    <a
                                                        href="#"
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                                                    >
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}

                    {/* color______________________________________________________________________________________ */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            {/* <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                                alt="Your Company"
                            /> */}
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name} >
                                                <a
                                                    href={item.href}

                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-violet-700 text-white'
                                                            : 'text-gray-900 hover:text-white hover:bg-violet-900',
                                                        'group flex gap-x-3 rounded-md p-2 text-md leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon

                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-gray-900 group-hover:text-white',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {/* <li>
                                    <div className="text-xs font-semibold leading-6 text-indigo-200">Your teams</div>
                                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                                        {teams.map((team) => (
                                            <li key={team.name}>
                                                <a
                                                    href={team.href}
                                                    className={classNames(
                                                        team.current
                                                            ? 'bg-indigo-700 text-white'
                                                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                                        {team.initial}
                                                    </span>
                                                    <span className="truncate">{team.name}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li> */}
                                {/* <li className="mt-auto">
                                    <a
                                        href="#"
                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white"
                                    >
                                        <Cog6ToothIcon
                                            className="h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white"
                                            aria-hidden="true"
                                        />
                                        Settings
                                    </a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72 h-full">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            {/* I changed this from form to "div" */}
                            <div className="relative flex flex-1">
                                {/* <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <input
                                    id="search-field"
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    type="search"
                                    name="search"
                                /> */}
                            </div>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Separator */}
                                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <MenuButton className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src={HeadshotZoomed}
                                            alt=""
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                                Clay Mangum
                                            </span>
                                            {/* <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                        </span>
                                    </MenuButton>
                                    {/* <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <MenuItem key={item.name}>
                                                    {({ focus }) => (
                                                        <a
                                                            href={item.href}
                                                            className={classNames(
                                                                focus ? 'bg-gray-50' : '',
                                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                            )}
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Transition> */}
                                </Menu>
                            </div>
                        </div>
                    </div>





                    {/* Put all outlets and content here ___________________________________________________________ */}
                    <main className="py-10 bg-gray-100 h-full">
                        <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>




                        <Outlet context={{
                            transactionsList: transactionsList,
                            categoryOptions: categoryOptions,
                            addNewTransaction: addNewTransaction,
                            deleteTransaction: deleteTransaction,
                            onUpdateTransaction: onUpdateTransaction,
                            chartOfAccountsList: chartOfAccountsList,
                            setChartOfAccountsList: setChartOfAccountsList,
                            revenueCategories: revenueCategories,
                            COGSCategories: COGSCategories,
                            opexCategories: opexCategories,
                            addNewChartOfAccount: addNewChartOfAccount,
                            profileDetails: profileDetails,
                            onUpdateProfile: onUpdateProfile
                        }}
                        />

                    </main>
                </div>
            </div>
        </>
    )
}
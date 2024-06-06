

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

// const people = [
//     { id: 1, name: 'Sales' },
//     { id: 2, name: 'Advertising & Marketing' },
//     { id: 3, name: 'Office Expenses' },
//     { id: 4, name: 'Meals & Entertainment' },
//     { id: 5, name: 'Job Supplies' },
//     { id: 6, name: 'Travel Expenses' },
//     { id: 7, name: 'Labor Expense' },
//     { id: 8, name: 'Rent & Lease' },
//     { id: 9, name: 'Insurance' },
//     { id: 10, name: 'Software & Subscriptions' },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu({ selected, setSelected, people, editForm }) {
    // const [selected, setSelected] = useState(people[0])


    // console.log(selected);

    // function handleChangeTest() {
    //     editForm['category'] = selected
    // }





    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    {/* <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label> */}
                    <div className="relative mt-2">
                        <ListboxButton className="relative w-[200px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <span className="block truncate">{selected.category}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                            <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {people.map((person) => (
                                    <ListboxOption
                                        key={person.id}
                                        className={({ focus }) =>
                                            classNames(
                                                focus ? 'bg-indigo-600 text-white' : '',
                                                !focus ? 'text-gray-900' : '',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({ selected, focus }) => (
                                            <>
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                    {person.category}
                                                </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            focus ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox >
    )
}
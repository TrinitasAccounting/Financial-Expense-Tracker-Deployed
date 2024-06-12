

import { useOutletContext } from "react-router-dom";

import EditProfilePopUp from "./EditProfilePopUp";

import { useState } from 'react'




export default function ProfilePage() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    const [currentlyOpenEditProfilePopUp, setCurrentlyOpenEditProfilePopUp] = useState(false)

    const { profileDetails, onUpdateProfile } = useOutletContext()


    const [editForm, setEditForm] = useState({
        id: "",
        name: "",
        job_type: "",
        state: "",
        age: "",
        email: ""

    })

    // Integrations Section____________________________________________________
    const [addNewIntegrationPopUp, setAddNewIntegrationPopUp] = useState(false)

    const [editIntegrationForm, setEditIntegrationForm] = useState({
        name: ""
    })


    const [integrationsList, setIntegrationsList] = useState(['Quickbooks', 'ADP Payroll', 'Microsoft PowerBI', 'SOS Inventory'])

    function openCloseNewIntegration() {
        return (setAddNewIntegrationPopUp((addNewIntegrationPopUp) => !addNewIntegrationPopUp))
    }

    function deleteIntegration(integrationName) {
        let filtered = integrationsList.filter((int) => {
            return (int !== integrationName.name)
        })

        setIntegrationsList(filtered)
    }

    function addNewIntegration(integrationName) {
        let addNewIntegrations = [...integrationsList, integrationName]

        setIntegrationsList(addNewIntegration)
    };

    function handleIntegrationChange(event) {
        setEditIntegrationForm({
            ...editIntegrationForm, [event.target.name]: event.target.value
        })
    }

    console.log(editIntegrationForm);

    // ________________________________________________________________________





    function openCloseEditProfilePopUp() {
        setCurrentlyOpenEditProfilePopUp((currentlyOpenEditProfilePopUp) => !currentlyOpenEditProfilePopUp)
    }

    // handles the changes on the front end only
    function handleProfileUpdate(updatedProfile) {
        setCurrentlyOpenEditProfilePopUp(false)
        onUpdateProfile(updatedProfile)
    }

    // capture user input in edit form inputs
    function handleChange(event) {
        setEditForm({
            ...editForm, [event.target.name]: event.target.value
        })
    }

    // Capturing the profile to edit when update button is clicked
    function captureEdit(clickedProfile) {
        let filtered = profileDetails.filter(profile => profile.id === clickedProfile.id)
        setEditForm(filtered[0])
    }

    // console.log(editForm);

    // This is setting the initial values when the edit profile box pops up
    // function clickOfEditSelected(editFormData) {

    //     setSelected({ id: editFormData.id, date: editFormData.date, description: editFormData.description, category: editFormData.category, amount: editFormData.amount })
    // }



    return (
        <>

            {currentlyOpenEditProfilePopUp ?

                <EditProfilePopUp currentlyOpenEditProfilePopUp={currentlyOpenEditProfilePopUp} openCloseEditProfilePopUp={openCloseEditProfilePopUp} editForm={editForm} handleProfileUpdate={handleProfileUpdate} handleChange={handleChange} captureEdit={captureEdit} />

                :

                <></>

            }



            <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">


                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                This information will be displayed publicly so be careful what you share.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        {profileDetails.length === 0 ? <div className="text-gray-900">Loading...</div> : <div className="text-gray-900">{profileDetails[0].name}</div>}
                                        <button
                                            // onClick={openCloseEditProfilePopUp}
                                            onClick={() => {
                                                captureEdit(profileDetails[0])
                                                openCloseEditProfilePopUp()
                                            }}
                                            type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        {profileDetails.length === 0 ? <div className="text-gray-900">Loading...</div> : <div className="text-gray-900">{profileDetails[0].email}</div>}
                                        <button

                                            onClick={() => {
                                                captureEdit(profileDetails[0])
                                                openCloseEditProfilePopUp()
                                            }}
                                            type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Title</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        {profileDetails.length === 0 ? <div className="text-gray-900">Loading...</div> : <div className="text-gray-900">{profileDetails[0].job_type}</div>}
                                        <button
                                            onClick={() => {
                                                captureEdit(profileDetails[0])
                                                openCloseEditProfilePopUp()
                                            }}
                                            type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Age</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        {profileDetails.length === 0 ? <div className="text-gray-900">Loading...</div> : <div className="text-gray-900">{profileDetails[0].age}</div>}
                                        <button
                                            onClick={() => {
                                                captureEdit(profileDetails[0])
                                                openCloseEditProfilePopUp()
                                            }}
                                            type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">State</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        {profileDetails.length === 0 ? <div className="text-gray-900">Loading...</div> : <div className="text-gray-900">{profileDetails[0].state}</div>}
                                        <button
                                            onClick={() => {
                                                captureEdit(profileDetails[0])
                                                openCloseEditProfilePopUp()
                                            }}
                                            type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>


                            </dl>
                        </div>



                        {/* Integrations Section */}

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Integrations</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">Connect applications to your account.</p>

                            <ul className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">QuickBooks</div>
                                    <button
                                        // onClick={deleteIntegration}
                                        // onClick={() => {
                                        //     deleteIntegration(profileDetails[0])

                                        // }}
                                        type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Delete
                                    </button>
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">ADP Payroll</div>
                                    <button
                                        onClick={deleteIntegration}
                                        type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Delete
                                    </button>
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">Microsoft PowerBI</div>
                                    <button
                                        onClick={deleteIntegration}
                                        type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Delete
                                    </button>
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900">SOS Inventory</div>
                                    <button
                                        onClick={deleteIntegration}
                                        type="button" className="font-semibold text-red-600 hover:text-indigo-500">
                                        Delete
                                    </button>
                                </li>
                            </ul>

                            {/* <div className="flex border-t border-gray-100 pt-6">
                                <button
                                    onClick={openCloseNewIntegration}
                                    type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    <span aria-hidden="true">+</span> Add another application
                                </button>
                            </div> */}

                            {addNewIntegrationPopUp ?
                                <>

                                    <div className="flex border-t border-gray-100 pt-6">
                                        <button
                                            onClick={openCloseNewIntegration}
                                            type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                            <span aria-hidden="true">+</span> Confirm Integration
                                        </button>
                                    </div>
                                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                                            >
                                                App Name
                                            </label>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <textarea
                                                value={editIntegrationForm.name}
                                                onChange={handleIntegrationChange}
                                                // onClick={() => {
                                                //     captureEdit(profileDetails[0])
                                                //     openCloseEditProfilePopUp()
                                                // }}
                                                onClick={addNewIntegration(editIntegrationForm.name)}

                                                id="name"
                                                name="name"
                                                rows={1}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                            />
                                        </div>
                                    </div>
                                </>

                                :

                                <div className="flex border-t border-gray-100 pt-6">
                                    <button
                                        onClick={openCloseNewIntegration}
                                        type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        <span aria-hidden="true">+</span> Add another app integration
                                    </button>
                                </div>


                            }
                        </div>

                        {/* <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Language and dates</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                Choose what language and date format to use throughout your account.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Language</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900">English</div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date format</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900">DD-MM-YYYY</div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <Field as="div" className="flex pt-6">
                                    <Label as="dt" className="flex-none pr-6 font-medium text-gray-900 sm:w-64" passive>
                                        Automatic timezone
                                    </Label>
                                    <dd className="flex flex-auto items-center justify-end">
                                        <Switch
                                            checked={automaticTimezoneEnabled}
                                            onChange={setAutomaticTimezoneEnabled}
                                            className={classNames(
                                                automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                                                'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0',
                                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </dd>
                                </Field>
                            </dl>
                        </div> */}
                    </div>
                </main>
            </div>
        </>
    )
}
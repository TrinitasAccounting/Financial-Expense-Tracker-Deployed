
import React from 'react'

function DeleteButton({ deleteTransaction, trans }) {


    // console.log(distributor);

    function handleDeleteButtonClick() {
        deleteTransaction(trans.id)
    }




    return (
        <button onClick={handleDeleteButtonClick} className=' border-solid text-red-700'>Delete</button>

    )
}

export default DeleteButton;
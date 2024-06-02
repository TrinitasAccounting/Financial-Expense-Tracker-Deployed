
import TransactionsList from "./TransactionsList";

import { useOutletContext } from "react-router-dom";


function TransactionsMainPage() {

    const { transactionsList, categoryOptions } = useOutletContext();


    return (
        <div>
            {/* <h1>Please Work</h1> */}
            <TransactionsList transactionsList={transactionsList} categoryOptions={categoryOptions} />


        </div>
    )
}

export default TransactionsMainPage;
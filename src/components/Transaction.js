import React, { useContext } from 'react'
import getAmountText from '../utils/getAmountText'

import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    
    const { deleteTransaction } = useContext(GlobalContext)
    const { text, amount } = transaction
    const getTransactionClassName = (amount) => amount < 0 ? 'minus' : 'plus'

    return (
        <li className={getTransactionClassName(amount)}>
            {text}
            <span>{getAmountText(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

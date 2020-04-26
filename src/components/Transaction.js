import React, { useContext } from 'react'
import formatAmount from '../utils/formatAmount'

import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    
    const { deleteTransaction } = useContext(GlobalContext)
    const { text, amount } = transaction
    const getTransactionClassName = (amount) => amount < 0 ? 'minus' : 'plus'

    return (
        <li className={getTransactionClassName(amount)}>
            {text}
            <span>{formatAmount(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}

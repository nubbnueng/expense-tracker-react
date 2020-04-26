import React from 'react'
import getAmountText from '../utils/getAmountText'

export const Transaction = ({ transaction }) => {
    
    const { text, amount } = transaction

    const getTransactionClassName = (amount) => amount < 0 ? 'minus' : 'plus'
    
    return (
        <li className={getTransactionClassName(amount)}>
            {text}
            <span>{getAmountText(amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}

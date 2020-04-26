import React from 'react'

export const Transaction = ({ transaction }) => {
    const { text, amount } = transaction

    const getTransactionClassName = (amount) => amount < 0 ? 'minus' : 'plus'
    const getAmountText = (amount) => amount < 0 ? `-$${amount * -1}` : `$${amount}`

    return (
        <li className={getTransactionClassName(amount)}>
            {text}
            <span>{getAmountText(amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}

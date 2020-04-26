import React, { useContext } from 'react'
import formatAmount from '../utils/formatAmount'
import { GlobalContext } from '../context/GlobalState'

export const TransactionSummary = () => {

    const { transactions } = useContext(GlobalContext)

    const getTotal = (filter) => transactions
        .map(transaction => transaction.amount)
        .filter(amount => filter(amount))
        .reduce((acc, amount) => acc += amount, 0)

    const totalIncome = getTotal(amount => amount > 0)
    const totalExpense = getTotal(amount => amount < 0)

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{formatAmount(totalIncome)}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">{formatAmount(totalExpense)}</p>
                </div>
            </div>
        </>
    )
}

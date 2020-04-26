import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

//initial state
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const getTransactions = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/transactions')
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.data.error
            })
        }
    }

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`)
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.data.error
            })
        }
    }

    const addTransaction = async (transaction) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.post('http://localhost:5000/api/v1/transactions', transaction, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.data.error
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            error: state.error,
            loading: state.loading,
            getTransactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
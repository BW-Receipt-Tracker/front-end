import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Receipt from './Receipt'

const ReceiptsList = () => {
    const [receipts, setReceipts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [searchParameter, setSearchParameter] = useState('');
    const [query, setQuery] = useState('');

    const handleParameterChanges = e => {
        console.log(e.target.value)
        setSearchParameter(e.target.value)
    }

    const handleQueryChanges = e => {
        setQuery(e.target.value)
    }

    const resetSearch = e => {
        e.stopPropagation()
        setQuery('')
        setUpdate(!update)
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`http://project-receipt-tracker.herokuapp.com/receipts/receipts?access_token=${token}`)
            .then(res => {
                console.log(res.data)
                setReceipts(res.data)
            })
            .catch(err => console.log(err))
    }, [update])

    useEffect(() => {
        if (searchParameter === 'date') {
            return setReceipts(receipts.filter(receipt => receipt.date.includes(query)))
        } else if (searchParameter === 'amount') {
            return setReceipts(receipts.filter(receipt => receipt.amount.includes(query)))
        } else if (searchParameter === 'category') {
            return setReceipts(receipts.filter(receipt => receipt.category.includes(query)))
        } else if (searchParameter === 'merchantname') {
            return setReceipts(receipts.filter(receipt => receipt.merchantname.includes(query)))
        } else {
            return setReceipts(receipts)
        }
    }, [query])
    
    return (
        <div>
            <label>Search by:
                <select onChange={handleParameterChanges}>
                    <option value=''>Choose One</option>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                    <option value='category'>Category</option>
                    <option value='merchantname'>Merchant</option>
                </select>
            </label>
            <input
                type='text'
                name='search'
                onChange={handleQueryChanges}
                value={query}
            />
            <button onClick={resetSearch}>Reset</button>
            {receipts.map(receipt => (
                <Receipt
                    key={receipt.receiptid}
                    receipt={receipt}
                    update={update}
                    setUpdate={setUpdate}
                />
            ))}
        </div>
    )
}

export default ReceiptsList
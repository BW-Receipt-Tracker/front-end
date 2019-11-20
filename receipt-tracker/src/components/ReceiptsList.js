import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Receipt from './Receipt'

const ReceiptsList = () => {
    const[receipts, setReceipts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`http://project-receipt-tracker.herokuapp.com/receipts/receipts?access_token=${token}`)
            .then(res => {
                console.log(res);
                setReceipts(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            {receipts.map(receipt => (
                <Receipt
                    key={receipt.receiptid}
                    receipt={receipt}
                />
            ))}
        </div>
    )
}

export default ReceiptsList
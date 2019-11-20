import React from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Receipt = props => {

    const token = localStorage.getItem('token');

    const deleteReceipt = e => {
        axiosWithAuth()
            .delete(`http://project-receipt-tracker.herokuapp.com/receipts/receipt/delete/${props.receipt.receiptid}?access_token=${token}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>{props.receipt.date}</p>
            <p>{props.receipt.amount}</p>
            <p>{props.receipt.category}</p>
            <p>{props.receipt.merchantname}</p>
            <button onClick={deleteReceipt}>Delete Receipt</button>
        </div>
    )
}

export default Receipt
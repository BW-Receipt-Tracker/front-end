import React, { useState } from 'react'
import axios from 'axios'

const CreateReceipt = () => {
    const [receiptInfo, setReceiptInfo] = useState({
        "date": '',
        "amount": '',
        "category": '',
        "merchantname": '',
        "imageurl": ''
    })

    const token = localStorage.getItem('token');

    const handleChanges = e => {
        setReceiptInfo({...receiptInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post(`http://project-receipt-tracker.herokuapp.com/receipts/receipt?access_token=${token}`, receiptInfo)
            .then(res => console.log(res))
            .catch(err => console.log)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='date'
                    name='date'
                    placeholder='date'
                    value={receiptInfo.date}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='amount'
                    placeholder='amount'
                    value={receiptInfo.amount}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='category'
                    placeholder='category'
                    value={receiptInfo.category}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='merchantname'
                    placeholder='merchantname'
                    value={receiptInfo.merchantname}
                    onChange={handleChanges}
                />
                <input 
                    type='text'
                    name='imageurl'
                    placeholder='imageurl'
                    value={receiptInfo.imageurl}
                    onChange={handleChanges}
                />
                <input 
                    name="file" 
                    type="file"
                    className="file-upload" 
                    data-cloudinary-field="image_id"
                    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                />
                <button>Add Receipt</button>
            </form>
        </div>
    )
}

export default CreateReceipt
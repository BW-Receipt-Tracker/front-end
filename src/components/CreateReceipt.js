import React, { useState } from 'react'
import axios from 'axios'

const CreateReceipt = () => {
    const initialData = {
        "date": '',
        "amount": '',
        "category": '',
        "merchantname": '',
        "imageurl": ''
    }
    const [receiptInfo, setReceiptInfo] = useState({initialData})
    const [image, setImage] = useState()

    const token = localStorage.getItem('token');
    // const cloudinaryBaseUrl = 'https://api.cloudinary.com/v1_1/dwxkvhdoj';
    const cloundinaryUploadPreset = 'receipt';

    const handleChanges = e => {
        setReceiptInfo({...receiptInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
            .post(`http://project-receipt-tracker.herokuapp.com/receipts/receipt?access_token=${token}`, receiptInfo)
            .then(res => {
                console.log(res);
                setReceiptInfo(initialData)
            })
            .catch(err => console.log(err))
    }

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', cloundinaryUploadPreset)
        axios
            .post('https://api.cloudinary.com/v1_1/dwxkvhdoj/image/upload', data)
            .then(res => {
                console.log(res)
                setImage(res.data.secure_url)
                console.log(receiptInfo)
            })
            .catch(err => console.log(err))
    }

    // const imageChange = e => {
    //     console.log(e.target.files[0])
    // }

    return (
            <form className="createReceipt" onSubmit={handleSubmit}>
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
                <button class="button">Add Receipt</button>
                <input 
                    name="file" 
                    type="file"
                    className="file-upload" 
                    data-cloudinary-field="image_id"
                    data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                    onChange={uploadImage}
                />
                <label class="label1">Copy this to image url:{" "}
                <input  
                    type='text'
                    name='url'
                    value={image}
                />
                </label>
            </form>
    )
}

export default CreateReceipt
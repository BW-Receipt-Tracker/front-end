import React, { useState } from 'react';

function CreateNewReceipt() {
    const [merchant, setMerchant] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [taxd, setTaxD] = useState('');
 
    
    //  const [error, setError] = useState('')

    // const onSubmit = e => {
    //     e.preventDefault();
    // };

    return (
        <form onSubmit = {(e) => (e)}>
            <input 
                name = "merchant"
                type = "text"
                value = {merchant}
                required
                placeholder = "Name"
                onChange = {(e) => setMerchant(e.target.value)} />
            {/* {error ? <span>{error}</span> : null} */}
            <input 
                name = "date"
                type = "date"
                value = {date}
                required
                onChange = {(e) => setDate(e.target.value)} />
            <input 
                name = "amount"
                type = "text"
                value = {amount}
                placeholder = "Amount"
                required
                onChange = {(e) => setAmount(e.target.value)} />
            <input 
                name = "TaxD"
                type = "text"
                value = {taxd}
                required
                onChange = {(e) => setTaxD(e.target.value)} />
            <label>Tax Deductible</label>
            <input type = "radio" checked = {taxd === "Yes" ? true : false} onClick = {() => setTaxD("Yes")} />Yes
            <input type = "radio" checked = {taxd === "No" ? true : false} onClick = {() => setTaxD("No")} />No
            {/* {error ? <span>{error}</span> : null} */}
            <button type = "button">Submit</button>
        </form>                     
    );
};

export default CreateNewReceipt
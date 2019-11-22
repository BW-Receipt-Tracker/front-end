import React, { useState, useEffect } from 'react'
import axios from 'axios'


const TotalSpending = props => {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
            .get(`http://project-receipt-tracker.herokuapp.com/receipts/receipts?access_token=${token}`)
            .then(res => {
                console.log(res);
                setCategories(res.data)
            })
            .catch(err => console.log(err))
    }, [props.update])

    return (
        <div>
            <h3>Total Spending</h3>
            {Array.from(categories).reduce((accumulator, currentValue) => {
                return accumulator += currentValue.amount
            }, 0)}
        </div>
    )
}

export default TotalSpending
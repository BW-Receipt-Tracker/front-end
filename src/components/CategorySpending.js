import React, { useState, useEffect } from 'react'
import axios from 'axios'




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
            {CategorySpending.map(receipt => (
                <CategorySpending
                    key={categorySpending.categorySpendingid}
                    categorySpending={categorySpending}
                />
            ))}
        </div>
    )
}

export default CategorySpending
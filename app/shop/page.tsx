'use client'

import React, { useCallback, useState } from 'react'
import Container from '../components/Container'
import Sidebar from '../components/Shop/Sidebar'
import Products from '../components/Shop/Products'

const Page = () => {
    const [checkboxes, setCheckboxes] = useState([
        {
            category: 'Type',
            options: [
                { id: 'vegetalCheckbox', label: 'Vegetal', checked: false },
                { id: 'caroteCheckbox', label: 'Carote', checked: false },
                { id: 'loremCheckbox', label: 'Lorem', checked: false },
            ],
        },
        {
            category: 'Size',
            options: [
                { id: 'smallCheckbox', label: 'Small', checked: false },
                { id: 'mediumCheckbox', label: 'Medium', checked: false },
                { id: 'largeCheckbox', label: 'Large', checked: false },
            ],
        },
        {
            category: 'Price Range',
            options: [
                { id: 'lowPriceCheckbox', label: 'Low', checked: false },
                { id: 'mediumPriceCheckbox', label: 'Medium', checked: false },
                { id: 'highPriceCheckbox', label: 'High', checked: false },
            ],
        },
    ]);


    const handleCheckboxChange = useCallback((id: string) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((category) => ({
                ...category,
                options: category.options.map((checkbox) =>
                    checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
                ),
            }))
        );
    }, []);


    return (
        <div className="pt-20 pb-20 bg-[#f2f2f2]">
            <Container>
                <h1 className='pt-11 pb-5 text-4xl text-black'>Shop</h1>
                <div className="flex">
                    <Sidebar checkboxes={checkboxes} handleCheckboxChange={handleCheckboxChange} />
                    <Products checkboxes={checkboxes} />
                </div>
            </Container>
        </div>
    )
}

export default Page
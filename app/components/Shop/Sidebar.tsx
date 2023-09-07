"use client"

import useModal from '@/app/hooks/useModel';
import React, { useCallback, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';


const Sidebar = () => {
    const { isOpen, onClose } = useModal();
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
        {
            category: 'Availability',
            options: [
                { id: 'inStockCheckbox', label: 'In Stock', checked: false },
                { id: 'outOfStockCheckbox', label: 'Out of Stock', checked: false },
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
        <>
            <div className='flex-3 hidden sm:flex flex-col gap-5 pt-5 pr-2 sm:pr-14 md:pr-20 xl:pr-44'>
                {checkboxes.map((category) => (
                    <div key={category.category}>
                        <h3 className='text-black'>{category.category}</h3>
                        {category.options.map((checkbox) => (
                            <div className="flex items-center gap-2" key={checkbox.id}>
                                <input
                                    type="checkbox"
                                    id={checkbox.id}
                                    className="checkbox checkbox-xs border border-primary"
                                    checked={checkbox.checked}
                                    onChange={() => handleCheckboxChange(checkbox.id)}
                                />
                                <label
                                    htmlFor={checkbox.id}
                                    className={`label ${checkbox.checked ? 'text-black' : 'text-gray-500'}`}
                                >
                                    {checkbox.label}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {isOpen && (
                <dialog open className='z-10 bg-white top-0 w-full h-screen px-7 py-10'>
                    <AiFillCloseCircle
                        onClick={onClose}
                        className="text-primary text-[1.4rem] ml-auto"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        {checkboxes.map((category) => (
                            <div key={category.category}>
                                <h3 className='text-black'>{category.category}</h3>
                                {category.options.map((checkbox) => (
                                    <div className="flex items-center gap-2" key={checkbox.id}>
                                        <input
                                            type="checkbox"
                                            id={checkbox.id}
                                            className="checkbox checkbox-xs border border-primary"
                                            checked={checkbox.checked}
                                            onChange={() => handleCheckboxChange(checkbox.id)}
                                        />
                                        <label
                                            htmlFor={checkbox.id}
                                            className={`label ${checkbox.checked ? 'text-black' : 'text-gray-500'}`}
                                        >
                                            {checkbox.label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <button className='bg-primary p-2 block ml-auto mt-4' onClick={onClose}>
                        Search
                    </button>
                </dialog>
            )}
        </>
    );
};

export default Sidebar;

'use client'

import React, { useEffect, useState } from 'react'

import { BsGridFill } from 'react-icons/bs'
import { RiLayout2Fill } from 'react-icons/ri'
import { IoFilterSharp } from 'react-icons/io5'

import Product from './Product'
import useModal from '@/app/hooks/useModel'
import { checkBoxOption, products } from '@/app/constant'


interface ProductsProps {
    checkboxes: checkBoxOption[]
}

const Products = ({ checkboxes }: ProductsProps) => {
    const { onOpen } = useModal()
    const [row, setRow] = useState(true)
    const [sortBy, setSortBy] = useState('manual')
    const [filteredProducts, setFilteredProducts] = useState(products)


    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortType = e.target.value;
        setSortBy(selectedSortType)
    }

    useEffect(() => {
        let filtered = [...products]

        checkboxes.forEach((category) => {
            category.options.forEach((option) => {
                if (option.checked) {
                    filtered = filtered.filter((product) =>
                        product.type.includes(option.label.toLowerCase())
                    )
                }
            })
        })

        if (sortBy === 'best-selling') {
            filtered.sort((a, b) => b.numOfRatings - a.numOfRatings)
        } else if (sortBy === 'title-ascending') {
            filtered.sort((a, b) => a.title.localeCompare(b.title))
        } else if (sortBy === 'title-descending') {
            filtered.sort((a, b) => b.title.localeCompare(a.title))
        } else if (sortBy === 'price-ascending') {
            filtered.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'price descending') {
            filtered.sort((a, b) => b.price - a.price)
        } else if (sortBy === 'created-ascending') {
            filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        } else if (sortBy === 'created-descending') {
            filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        }

        setFilteredProducts(filtered)
    }, [checkboxes, sortBy])

    return (
        <div className='flex-1'>
            <div className="flex justify-between items-center p-5">
                <div className="flex gap-2 items-center" >
                    <div className={`${row ? "bg-gray-200" : ""} p-[2px] cursor-pointer`}>
                        <BsGridFill
                            onClick={() => setRow(true)}
                            style={{ fontSize: '1.2em' }}
                        />
                    </div>
                    <div className={`${!row ? "bg-gray-200" : ""} p-[2px] cursor-pointer`}>
                        <RiLayout2Fill
                            onClick={() => setRow(false)}
                            style={{ fontSize: '1.3em' }}
                        />
                    </div>
                    <div className="block sm:hidden p-[2px] cursor-pointer">
                        <IoFilterSharp
                            onClick={onOpen}
                            style={{ fontSize: '1.2em' }}
                        />
                    </div>
                </div>
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="bg-white text-black w-40 select select-bordered max-w-xs"
                >
                    <option value="manual">
                        Featured
                    </option>

                    <option value="best-selling">
                        Best selling
                    </option>

                    <option value="title-ascending">
                        Alphabetically, A-Z
                    </option>

                    <option value="title-descending">
                        Alphabetically, Z-A
                    </option>

                    <option value="price-ascending">
                        Price, low to high
                    </option>

                    <option value="price-descending">
                        Price, high to low
                    </option>

                    <option value="created-ascending">
                        Date, old to new
                    </option>

                    <option value="created-descending">
                        Date, new to old
                    </option>
                </select>

            </div>
            <div className={`py-1 px-5 flex flex-wrap justify-center gap-3 ${!row && "flex-col"}`}>
                {filteredProducts.map(({ id, mainImg, title, numOfRatings, rate, price }) => (
                    <Product
                        key={id}
                        id={id}
                        row={row}
                        mainImg={mainImg}
                        title={title}
                        numOfRatings={numOfRatings}
                        rate={rate}
                        price={price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products
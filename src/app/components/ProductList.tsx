'use client'

import { useEffect, useReducer, useState } from "react";
import CartItem from "./CartItem";
import { useAppDispatch } from "../lib/hooks";
import { add, deleted } from "../lib/feature/cart/cartSlice";
import Link from 'next/link'


export type ratingType = {
    rate: number,
    count: number,
}

export interface productsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: ratingType,
    image: string
}

export default function ProductList({ priceFilter, categoryFilter, searchValue}:{priceFilter:any,categoryFilter:any , searchValue:string}) {

    const dispatch = useAppDispatch();

    const [products, setProducts] = useState<productsTypes[]>([]);
    const [filterData, setFilterData] = useState<productsTypes[]>([]);
    const [searchData, setSearchData] = useState<productsTypes[]>([])

    useEffect(() => {
        async function getData() {
            try {
                const url = 'https://fakestoreapi.com/products';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
                setFilterData(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])

    // this is for filters
    useEffect(() => {
        const data = searchValue ?  searchData.filter((item) => {
            if (categoryFilter.length === 0 && priceFilter == 0) {
                return true;
            }
            else if (categoryFilter.length > 0 && priceFilter == 0) {
                return categoryFilter.map((c:any) => c.category).includes(item.category);
            }
            else if (categoryFilter.length == 0 && priceFilter > 0) {
                return item.price <= priceFilter;
            }
            else {
                return categoryFilter.map((c:any) => c.category).includes(item.category) && item.price <= priceFilter;
            }
        }) 
        :
         products.filter((item) => {
            if (categoryFilter.length === 0 && priceFilter == 0) {
                return true;
            }
            else if (categoryFilter.length > 0 && priceFilter == 0) {
                return categoryFilter.map((c:any) => c.category).includes(item.category);
            }
            else if (categoryFilter.length == 0 && priceFilter > 0) {
                return item.price <= priceFilter;
            }   
            else {
                return categoryFilter.map((c:any) => c.category).includes(item.category) && item.price <= priceFilter;
            }
        })
        setFilterData(data);
    }, [priceFilter, categoryFilter])

    // for searching
    useEffect(()=>{
        if(searchValue){
       const data = products.filter((item)=>(item.category).includes(searchValue) ||  (item.description).includes(searchValue) || (item.title).includes(searchValue))
       setSearchData(data);
       setFilterData(data);
        }

    },[searchValue])

    const handleAddItem = (item: productsTypes) => {
        //redux function
        dispatch(add(item))
    }

    return (
        <div className="w-full border border-gray-200 rounded p-4">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 justify-stretch">
                {filterData.length > 0 && filterData.map((item, index) => (
                    <div key={index} className=" grid-cols-[repeat(auto-fit,minmax(300px,1fr))] border relative">
                        <div className="w-full h-[250px]  bg-gray-200 p-4">
                            <img
                                src={item.image || ''}
                                alt="kurtaImage"
                                className="object-contain h-full w-full"
                            />
                        </div>
                        <div className="p-2 bg-white">
                            <p className="text-red-600 font-semibold">{item.category}</p>
                            <Link href={`/${item.id}`} className="cursor-pointer text-sm font-semibold mt-2"> {item.title} </Link>

                            <p className="text-sm font-normal mt-2">&#8377; {item.price} </p>
                            <button className="px-4 py-1 rounded-full font-semibold bg-yellow-300 mt-2 cursor-pointer"
                                onClick={() => handleAddItem(item)}> add to cart</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* now it has no use. need to remove it with component */}
            {/* <CartItem removeHandler={handleRemoveItem} /> */}
        </div>
    )
}
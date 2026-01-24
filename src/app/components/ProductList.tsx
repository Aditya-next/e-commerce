'use client'

import Image from "next/image"
import { it } from "node:test";
import { useEffect, useReducer, useState } from "react";
import CartItem from "./CartItem";


type ratingType = {
    rate: number,
    count: number,
}

interface productsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: ratingType,
    image: string
}

export default function ProductList() {

    // const [cardItem, setCartItem] = useState<productsTypes[]>([]);

    // conver useState to useReducer
    const [cartItem, dispatch] = useReducer(taskReducer, []);



    const [products, setProducts] = useState<productsTypes[]>([]);

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
                setProducts(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])

    const handleAddItem = (item:productsTypes) => {
        //dispatch for useReducer
        dispatch({
            type : 'added',
            data : item
        })
        // setCartItem([...cardItem, item])
    }

    const handleRemoveItem =(id:number)=>
    {
        dispatch({
            type : 'remove',
            data : id
        })
        // console.log("id", id);
        // setCartItem(cardItem.filter(item=>item.id !== id));
    }

    function taskReducer(cartItem:any, action:any)
    {
        switch(action.type){
        case 'added':
        {
            return[
                ...cartItem,
                action.data
            ];
        }
        case 'remove' :{
            return cartItem.filter((items:productsTypes)=> items.id !== action.id);
        }
        default :{
             throw Error('Unknown action: ' + action.type);
        }
    }
    }

    return (
        <div className="w-full border border-gray-200 rounded p-4">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5 justify-stretch">
                {products.length > 0 && products.map((item, index) => (
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
                            <p className="text-sm font-semibold mt-2">{item.title}</p>

                            <p className="text-sm font-normal mt-2">&#8377; {item.price} </p>
                            <button className="px-4 py-1 rounded-full font-semibold bg-yellow-300 mt-2 cursor-pointer"
                                onClick={() => handleAddItem(item)}> add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <CartItem addedItem = {cartItem} removeHandler = {handleRemoveItem}/>
        </div>

        


    )
}
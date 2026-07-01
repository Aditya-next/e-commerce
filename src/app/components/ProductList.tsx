'use client'

import { useEffect, useState } from "react";
import { useAppDispatch } from "../lib/hooks";
import { add, } from "../lib/feature/cart/cartSlice";
import Link from 'next/link'
import { Category } from "./Main";
import Image from "next/image";


export type ratingType = {
    rate: number,
    count: number,
}


type ProductListProps = {
  priceFilter: number;
  categoryFilter: Category[];
  searchValue: string;
};

export interface productsTypes {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    rating: ratingType,
    image: string
}

export default function ProductList({ priceFilter, categoryFilter, searchValue}:ProductListProps) {

    const dispatch = useAppDispatch();

    const [products, setProducts] = useState<productsTypes[]>([]);
    const [filterData, setFilterData] = useState<productsTypes[]>([]);

    useEffect(() => {
        async function getData() {
            try {
                const url = 'https://fakestoreapi.com/products';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setFilterData(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [])

useEffect(() => {
  let data = products;

  // Search
  if (searchValue) {
    data = data.filter(
      (item) =>
        item.category
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(searchValue.toLowerCase()) ||
        item.title
          .toLowerCase()
          .includes(searchValue.toLowerCase())
    );
  }

  // Category Filter
  if (categoryFilter?.length > 0) {
    const categories = categoryFilter.map((c) => c.category);

    data = data.filter((item) =>
      categories.includes(item.category)
    );
  }

  // Price Filter
  if (priceFilter > 0) {
    data = data.filter((item) => item.price <= priceFilter);
  }

  setFilterData(data);
}, [products, searchValue, categoryFilter, priceFilter]);

    const handleAddItem = (item: productsTypes) => {
        //redux function
        dispatch(add(item))
    }

    return (
        <div className=" lg:col-span-11 lg:col-start-4 col-span-14 col-start-1 border border-gray-200 rounded p-4">
            <div className=" grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 justify-stretch">
                {filterData.length > 0 && filterData.map((item, index) => (
                    <div key={index} className="border relative">
                        <div className="w-full h-[250px]  bg-gray-200 p-4 relative">
                            <Image
                                src={item.image || ''}
                                alt="kurtaImage"
                                className="object-contain h-full w-full"
                                fill
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
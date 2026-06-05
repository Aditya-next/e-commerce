'use client'


import { useState } from "react";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

export type Category = {
  category: string;
};

export default function Main({searchValue}:{searchValue:string}) {
    const [category, setCategory] = useState<Category[]>([]);
    const [price, setPrice] = useState<number>(0);
    console.log(price, category);
    return (
        <>
            <div className="p-4 md:px-8 lg:px-16 2xl:px-20] mt-[70px]">
                <div className="flex gap-2">
                    <FilterSection setPriceFilter = {setPrice} setCategoryFilter = {setCategory} />
                    <ProductList priceFilter={price} categoryFilter ={category} searchValue = {searchValue}/>
                </div>
               
            </div>
        </>
    )
}
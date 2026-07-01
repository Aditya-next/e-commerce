'use client'

import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

export type Category = {
  category: string;
};

type MainType = {
    searchValue : string,
    price : number,
    category : Category[],
    setPrice: React.Dispatch<React.SetStateAction<number>>;
    setCategory: React.Dispatch<React.SetStateAction<Category[]>>;
}

export default function Main({searchValue , setPrice , setCategory , price , category }:MainType) {
    
    console.log(price, category);
    return (
        <>
            <div className="max-w-[1440px] mx-auto mt-[70px]">
                <div className="grid grid-cols-14 gap-5">
                    <FilterSection setPriceFilter = {setPrice} setCategoryFilter = {setCategory} />
                    <ProductList priceFilter={price} categoryFilter ={category} searchValue = {searchValue}/>
                </div>
               
            </div>
        </>
    )
}
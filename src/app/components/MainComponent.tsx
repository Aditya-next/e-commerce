'use client'
import { useState } from "react";
import Header from "./Header";
import Main, { Category } from "./Main";
import FixedCart from "./FixedCart";

export default function MainComponent(){

    const [searchItem, setSearchItem] = useState<string>('');
    const [category, setCategory] = useState<Category[]>([]);
    const [price, setPrice] = useState<number>(0);
    
    return(
        <div>
            <Header searcher = {setSearchItem} setCategory = {setCategory} setPrice = {setPrice}/>
            <Main searchValue = {searchItem} setCategory = {setCategory} setPrice = {setPrice} price = {price} category = {category}/>
            <FixedCart/>
        </div>
    )
}
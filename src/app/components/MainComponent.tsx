'use client'
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import FixedCart from "./FixedCart";

export default function MainComponent(){

    const [searchItem, setSearchItem] = useState<string>('');
    return(
        <div>
            <Header searcher = {setSearchItem}/>
            <Main searchValue = {searchItem}/>
            <FixedCart/>
        </div>
    )
}
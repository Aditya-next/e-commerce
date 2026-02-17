'use client'
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

export default function MainComponent(){

    const [searchItem, setSearchItem] = useState('');
    return(
        <div>
            <Header searcher = {setSearchItem}/>
            <Main searchValue = {searchItem}/>
        </div>
    )
}
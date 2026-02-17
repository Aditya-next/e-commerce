'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({searcher}:{searcher:any}) => {

    const [search, setSearch] = useState('');

    

    function handleSearch(){
        searcher(search)
    }

    return (
        <div className="relative  w-[500px]  h-8 rounded-[6px] overflow-hidden border border-gray-400">
            <input type="text" className=" focus:outline-0 h-full w-full pl-5 text-gray-500 font-normal" value={search} onChange={(e:any)=>setSearch(e.target.value)} />
            <button className='flex w-10 h-8 absolute right-0 top-0 bg-amber-400 justify-center items-center cursor-pointer' onClick={handleSearch} >
                <Search className=" text-gray-500 h-5 w-5"  />
            </button>
        </div>
    )
}

export default SearchBar

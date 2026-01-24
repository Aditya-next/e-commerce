import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    return (
        <div className="relative">
            <input type="text" className="border border-gray-400 focus:outline-0 w-[500px] h-8 rounded-[6px] pl-10 text-gray-500 font-normal" />
            <Search className ="absolute left-1 top-1 text-gray-400" />
        </div>
    )
}

export default SearchBar

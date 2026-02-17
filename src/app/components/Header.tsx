import { BaggageClaim, Search, UserRound } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import CartIcon from "./ui/CartIcon";
import UserIcons from "./ui/UserIcons";


export default function Header({searcher}:{searcher:any}) {

    return (
        // navigation menu
        <div className="fixed top-0 w-full bg-white z-10">
            <div className="relative flex shadow-sm h-[70px] items-center px-5 justify-between">
            <div className="flex items-center h-full ">
                <div className="h-[50px]"><img src="logo.svg" className="h-full" alt="" /></div>
                <nav className="h-full relative">
                    <ul className="flex h-full items-center gap-2">
                        <li className="hover:text-gray-100 hover:bg-gray-400 px-5 py-2 rounded-3xl cursor-pointer">Home
                        <div className="absolute bg top-full px-5 py-3 bg-red-50 w-full hidden group-hover:block">aditya</div>
                        </li>
                        <li className="hover:text-gray-100 hover:bg-gray-400 px-5 py-2 rounded-3xl cursor-pointer">Men</li>
                        <li className="hover:text-gray-100 hover:bg-gray-400 px-5 py-2 rounded-3xl cursor-pointer">Woman</li>
                        <li className="hover:text-gray-100 hover:bg-gray-400 px-5 py-2 rounded-3xl cursor-pointer">Kids</li>
                        <li className="hover:text-gray-100 hover:bg-gray-400 px-5 py-2 rounded-3xl cursor-pointer">Beauty</li>
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-12">
                <SearchBar searcher = {searcher}/>
                <UserIcons/>
                <CartIcon/>
            </div>
            </div>

        </div>


    )
}
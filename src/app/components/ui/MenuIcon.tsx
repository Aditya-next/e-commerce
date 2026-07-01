'use client'
import { Menu } from "lucide-react";
import SideMenu from "../SideMenu";
import { useState } from "react";
import { Category } from "../Main";

type HeaMenuIconProps = {
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<Category[]>>;
};

export default function MenuIcon({setPrice, setCategory}:HeaMenuIconProps){
    const [showMenu, setShowMenu] = useState(false)
    return(
        <div>
            <Menu className="block lg:hidden" onClick={()=>setShowMenu(true)}/>
            <SideMenu show = {showMenu} toggle = {setShowMenu} priceFilter = {setPrice} categoryFilter = {setCategory}/>
        </div>
    )
}
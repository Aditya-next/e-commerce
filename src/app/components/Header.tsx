"use client";
import SearchBar from "./ui/SearchBar";
import CartIcon from "./ui/CartIcon";
import UserIcons from "./ui/UserIcons";
import Image from "next/image";
import MenuIcon from "./ui/MenuIcon";
import { useState } from "react";
import { Category } from "./Main";

type HeaderProps = {
  searcher: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setCategory: React.Dispatch<React.SetStateAction<Category[]>>;
};

export default function Header({
  searcher,
  setPrice,
  setCategory,
}: HeaderProps) {
  return (
    // navigation menu
    <div className="fixed top-0 w-full bg-white z-10">
      <div className="flex shadow-sm h-[70px]  items-center lg:px-5 md:px-3 px-2  justify-between">
        <div className="lg:hidden block">
          <MenuIcon setPrice={setPrice} setCategory={setCategory} />
        </div>
        <div className="h-[50px] w-[150px] lg:block hidden">
          <Image
            src="logo.svg"
            className=""
            height={500}
            width={500}
            alt="brand logo"
          />
        </div>
        <div className="flex items-center lg:gap-12 gap-3">
          <SearchBar searcher={searcher} />
          <UserIcons />
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

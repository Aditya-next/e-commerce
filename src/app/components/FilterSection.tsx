"use client";

import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { Category } from "./Main";

type filterTypes = {
  setPriceFilter: React.Dispatch<React.SetStateAction<number>>;
  setCategoryFilter: React.Dispatch<React.SetStateAction<Category[]>>;
};

export default function FilterSection({
  setPriceFilter,
  setCategoryFilter,
}: filterTypes) {
  const [category, setCategory] = useState<boolean>(false);

  const [priceRange, setPriceRange] = useState<number>(0);
  const [addCategory, setAddCategory] = useState<Category[]>([]);

  function toggleCategroy() {
    setCategory((cat) => !cat);
  }

  function clearFilter() {
    setPriceRange(0);
    setPriceFilter(0);
    setAddCategory([]);
    setCategoryFilter([]);
  }
  function handleCategory(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;

    if (checked) {
      setAddCategory((prev) => [...prev, { category: value }]);
    } else {
      setAddCategory((prev) => prev.filter((pre) => pre.category !== value));
    }
  }

  function applyFilter() {
    const price = priceRange;
    const categoryLength = addCategory;

    if (price > 0 || categoryLength.length) {
      setPriceFilter(price);
      setCategoryFilter(categoryLength);
    }
  }

  return (
    <div className="w-[300px] h-[100vh] border rounded border-gray-200 p-2 sticky top-[80px]">
      <div className="priceFilter">
        <h2 className="text-[18px] font-semibold">Price Range</h2>
        <div className="space-y-2">
          <label htmlFor="priceRange" className="text-sm font-semibold">
            Price:
          </label>{" "}
          <input
            type="number"
            value={priceRange}
            min={0}
            name="minPrice"
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="mixPrice border rounded  px-2"
          />
        </div>
      </div>

      {/* temporary disabled */}

      <div className="categoryFilter mt-5">
        <h2 className="text-[18px] font-semibold">Select Category</h2>

        <div className=" ">
          <div className="flex gap-1">
            {" "}
            <input
              type="checkbox"
              name="men's clothing"
              value="men's clothing"
              onChange={handleCategory}
            />{" "}
            <p>{"men's clothing"}</p>
          </div>
          <div className="flex gap-1">
            {" "}
            <input
              type="checkbox"
              name="women's clothing"
              value="women's clothing"
              onChange={handleCategory}
            />{" "}
            <p>{"women's clothing"}</p>
          </div>
          <div className="flex gap-1">
            {" "}
            <input
              type="checkbox"
              name="electricals"
              value="electricals"
              onChange={handleCategory}
            />{" "}
            <p>electricals</p>
          </div>
          <div className="flex gap-1">
            {" "}
            <input
              type="checkbox"
              name="electronics"
              value="electronics"
              onChange={handleCategory}
            />{" "}
            <p>electronics</p>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${category ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                        `}
          >
            <div className="flex gap-1">
              <input
                type="checkbox"
                name="jewelery"
                value="jewelery"
                onChange={handleCategory}
              />
              <p>jewelery</p>
            </div>

            <div className="flex gap-1">
              <input
                type="checkbox"
                name="health"
                value="health"
                onChange={handleCategory}
              />
              <p>health</p>
            </div>
          </div>

          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={toggleCategroy}
          >
            <ChevronUp
              className={`text-red-500 w-4 h-4 transition  delay-75 duration-300 ease-in-out ${category ? "rotate-0" : "rotate-180"}`}
            />
            <p className="text-sm text-red-500 transition-all duration-300 ease-in-out">
              {category ? "show less" : "show more"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <button
            onClick={applyFilter}
            disabled={priceRange <= 0 && addCategory.length === 0}
            className="py-1 px-4 mt-5 rounded-2xl bg-red-500 text-white font-semibold text-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          >
            Apply Filter
          </button>

          <button
            onClick={clearFilter}
            className="py-1 px-4 mt-5 rounded-2xl bg-green-500 text-white font-semibold text-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer capitalize"
          >
            clear filter
          </button>
        </div>
      </div>
    </div>
  );
}

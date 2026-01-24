


import FilterSection from "./FilterSection";
import ProductList from "./ProductList";

export default function Main() {
    return (
        <>
            <div className="p-4 md:px-8 lg:px-16 2xl:px-20] mt-[70px]">
                <div className="flex gap-2">
                    <FilterSection />
                    <ProductList />
                </div>
               
            </div>
        </>
    )
}
import Link from "next/link";
import { useAppSelector } from "../lib/hooks";
import { productsTypes } from "./ProductList";
import { CircleCheck } from 'lucide-react';

export default function FixedCart() {

    const item: productsTypes[] = useAppSelector(state => state.cart.items)

    let subTotal = item.reduce((total, n) => { return total += n.price }, 0)



    // when no items in cart
    if (!item.length) {
        return (
            <>
            </>
        )
    }

    // when cart added items
    else {
        return (
            <>
                <div className="fixed bottom-0 left-0 right-0 w-full p-3 z-100 bg-white border-t border-gray-200 rounded-t-2xl">
                    <div className="flex gap-5 p-2 md:px-8 lg:px-16 2xl:px-20]">
                        <div className="bg-white w-[80%] h-full flex border-r border-gray-400">
                            <div className="w-[300px] h-[70px]">
                                <img src={item[item.length - 1]?.image || ''} alt=""
                                    className="object-contain object-center h-full w-full" />
                            </div>
                            <div>
                                <div className="flex gap-2 items-center">
                                    <div>
                                        <CircleCheck className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[18px]">added to cart</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-[500] ">{item[item.length - 1].title}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-[20%] h-full flex gap-8 items-center">
                            <div>
                                <p className="text-[18px] font-semibold text-gray-700 capitalize">Sub total</p>
                                <p>&#8377; {subTotal.toFixed(2)}</p>
                            </div>
                            <div>
                                <Link href='/cart' className="px-6 py-1 rounded-full text-black font-[300] border text-sm capitalize ">
                                    Goto Cart
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
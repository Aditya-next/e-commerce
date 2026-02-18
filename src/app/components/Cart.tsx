'use client'
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "../lib/hooks"
import { productsTypes } from "./ProductList"
import { Star } from 'lucide-react';
import { deleted } from "../lib/feature/cart/cartSlice";



export default function Cart() {

    const item: productsTypes[] = useAppSelector(state => state.cart.items);

    let subTotal = item.reduce((total, n) => { return total += n.price }, 0)

    const dispatch = useAppDispatch();

    function hanldeRemoveCart(id:number){
        dispatch(deleted(id));
    }

    if (!item.length) {
        return (
            <div className="p-4 md:px-8 lg:px-16 2xl:px-20]">
                <div className=" bg-white border border-gray-200 rounded-lg px-15 py-5 flex  gap-7">
                    <div className="w-[250px]">
                        <img src="images/emptyCart.png"
                            alt="empty cart"
                            className="object-contain object-center"
                        />
                    </div>
                    <div className="space-y-4">
                        <p className="text-2xl font-semibold pt-10">Your shopping cart is empty</p>
                        <Link href='/'
                            className="py-1 px-5 text-white font-semibold capitalize rounded-2xl bg-green-400">Shop now</Link>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div className="p-4 md:px-8 lg:px-16 2xl:px-20 flex gap-5">
            <div className="border border-gray-200 w-full rounded p-5">
                <h2 className="pb-3 text-2xl font-medium">Shopping Cart</h2>
                <hr className="text-gray-300" />

                <div>
                    {item && item.map((pro) => (
                        <div className="flex justify-between py-3 border-b border-gray-300" key={pro.id}>
                            <div className="flex gap-5 items-center justify-between ">
                                <div className="min-w-[150px] h-[100px]">
                                    <img src={pro?.image} alt="product image"
                                        className="object-contain h-full w-full" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold ">{pro.title}</h3>
                                    <p className="text-[14px] ">{pro.description}</p>
                                    <p className="flex items-center gap-1">{pro.rating.rate}<Star className="h-4 w-4 text-[#EFBF04]" /></p>
                                    <button className="px-3 py-1 text-xs rounded-full text-blue-500 border-blue-200 border" onClick={()=>hanldeRemoveCart(pro.id)}>
                                        remove item
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-semibold">&#8377;{pro.price} </p>
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-2 justify-end">
                        <p className="">Subtotal ({item.length} items):</p> <p className="font-semibold">&#8377;{subTotal.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div className="h-[200px] p-4  max-h-[200px] w-[300px] border border-gray-200 rounded space-y-2 sticky top-4">
                <div className="flex gap-x-2"><p className="text-sm">Subtotal ({item.length} items):</p> <p className="font-semibold">&#8377;{subTotal.toFixed(2)}</p></div> 
                <Link href='' className="text-sm block text-center w-full py-1 rounded-full border bg-amber-300">proceed to pay</Link>
            </div>
        </div>
    )
}
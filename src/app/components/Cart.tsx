"use client";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { Star } from "lucide-react";
import { deleted } from "../lib/feature/cart/cartSlice";
import { productsTypes } from "./ProductList";
import Image from "next/image";

export default function Cart() {
  const item: productsTypes[] = useAppSelector((state) => state.cart.items);

  const subTotal = item.reduce((total, n) => {
    return (total += n.price);
  }, 0);

  const dispatch = useAppDispatch();

  function hanldeRemoveCart(id: number | string) {
    dispatch(deleted(id));
  }

  if (!item.length) {
    return (
      <div className="p-2 md:px-8 lg:px-16 2xl:px-20]">
        <div className=" bg-white border border-gray-200 rounded-lg px-2 md:px-15 py-5 flex sm:flex-row flex-col gap-0 items-center">
          <div className="w-[250px] min-h-[150px] relative">
            <Image
              src="/images/emptyCart.png"
              alt="empty cart"
              className="object-contain object-center"
              fill
            />
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-semibold pt-10">
              Your shopping cart is empty
            </p>
            <Link
              href="/"
              className="py-1 px-5 text-white font-semibold capitalize rounded-2xl bg-green-400"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:px-8 lg:px-16 2xl:px-20 flex sm:flex-row flex-col gap-5">
      <div className="border border-gray-200 w-full rounded p-5">
        <h2 className="pb-3 text-2xl font-medium">Shopping Cart</h2>
        <hr className="text-gray-300" />

        <div>
          {item &&
            item.map((pro) => (
              <div
                className="flex sm:flex-row flex-col gap-2 justify-between py-3 border-b border-gray-300"
                key={pro.id}
              >
                <div className="flex items-center justify-between ">
                  <div className="flex sm:flex-row flex-col">
                    <div className="min-w-[250px] h-[120px] relative">
                      <Image
                        src={pro?.image}
                        alt="product image"
                        className="object-contain h-full w-full"
                        fill
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold ">{pro.title}</h3>
                      <p className="text-[14px] ">{pro.description}</p>
                      <p className="flex items-center gap-1">
                        {pro.rating.rate}
                        <Star className="h-4 w-4 text-[#EFBF04]" />
                      </p>
                      <button
                        className="px-3 py-1 text-xs rounded-full text-blue-500 border-blue-200 border"
                        onClick={() => hanldeRemoveCart(pro.id)}
                      >
                        remove item
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="font-semibold">&#8377;{pro.price} </p>
                </div>
              </div>
            ))}
          <div className="flex gap-2 justify-end">
            <p className="">Subtotal ({item.length} items):</p>{" "}
            <p className="font-semibold">&#8377;{subTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="h-[200px] p-4  max-h-[200px] sm:w-[300px] w-full border border-gray-200 rounded space-y-2 sticky top-4">
        <div className="flex gap-x-2">
          <p className="text-sm">Subtotal ({item.length} items):</p>{" "}
          <p className="font-semibold">&#8377;{subTotal.toFixed(2)}</p>
        </div>
        <Link
          href={"/order"}
          className="text-sm block text-center w-full py-1 rounded-full border bg-amber-300"
        >
          proceed to pay
        </Link>
      </div>
    </div>
  );
}

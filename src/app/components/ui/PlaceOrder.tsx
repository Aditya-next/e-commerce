"use client";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { useState } from "react";
import Link from "next/link";
import { CartItem, clearCart } from "@/app/lib/feature/cart/cartSlice";
import { redirect } from "next/navigation";

export default function PlaceOrder() {
  const [paymentType, setPaymentType] = useState("");
  const [orderStuatus, setOrderStatus] = useState(false);

  const item: CartItem[] = useAppSelector((state) => state.cart.items);
  let subTotal = item.reduce((total, n) => {
    return (total += n.price);
  }, 0);

  const dispatch = useAppDispatch();

  function orderPlace() {
    // clearCart once order is placed
    dispatch(clearCart());
    setOrderStatus(true);
  }

  function handlePayment(e: React.ChangeEvent<HTMLInputElement>) {
    const type = e.target.value;
    setPaymentType(type);
  }

  // if we go to orderpage but no item is selecte then redirect to cart page
  if (!item.length && !orderStuatus) {
    return redirect("/cart");
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4 mt-5">
        {/* for address and payment method section */}
        <div className="flex flex-col gap-4 grid-cols-1 lg:col-span-2">
          <div className=" p-4 shadow-sm space-y-2">
            <h2 className="font-bold text-xl">Delivery to Aditya kumar</h2>
            <p className="text-sm">
              55 B, basera residency, Lal ghadi road dayal Bagh, AGRA, UTTAR
              PRADESH, 282005, India
            </p>
          </div>
          <div className=" p-6 shadow-sm">
            <h2 className="font-bold text-2xl">Payment method</h2>
            <div className="p-4 mt-10 border border-gray-300 rounded-md space-y-4">
              <div
                className={`w-full flex gap-3 p-2  rounded  ${paymentType === "cashondelivery" ? "border border-red-300 bg-red-50" : ""}  items-center `}
              >
                <input
                  type="radio"
                  id="cashondelivery"
                  name="payment"
                  value="cashondelivery"
                  onChange={(e) => handlePayment(e)}
                />
                <label
                  htmlFor="cashondelivery"
                  className="flex flex-col text-sm p-0"
                >
                  <p>Cash on Delivery/Pay on Delivery</p>
                </label>
              </div>

              <div
                className={`w-full flex gap-3 p-2  rounded  ${paymentType === "upi" ? "border border-red-300 bg-red-50" : ""}  items-center `}
              >
                <input
                  type="radio"
                  id="upi"
                  name="payment"
                  value="upi"
                  onChange={(e) => handlePayment(e)}
                />
                <label htmlFor="upi" className="flex flex-col text-sm p-0">
                  Scan and pay with upi
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* for showing user cart product */}
        <div className="p-4 shadow-sm">
          <div className="w-full ">
            <div className="flex justify-between space-y-2">
              <div>
                <p className="text-sm">items</p>
                <p className="text-sm">total</p>
              </div>
              <div>
                <p className="text-sm text-right">{item.length}</p>
                <p className="text-sm text-green-500">
                  -- &#8377;{subTotal.toFixed(2)}
                </p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold capitalize">Order Total:</h2>
              <p className="text-lg font-semibold capitalize">
                {" "}
                &#8377;{subTotal.toFixed(2)}
              </p>
            </div>
            {paymentType && (
              <button
                className="w-full py-1 px-4 bg-amber-300 rounded-2xl mt-2 md:mt-4 text-sm disabled:bg-amber-100"
                disabled={!paymentType}
                onClick={orderPlace}
              >
                Place your order
              </button>
            )}
          </div>
        </div>
      </div>

      {/* visible when ordern is placed by user */}
      {orderStuatus && (
        <section className="fixed top-1/2 left-1/2 h-[450px] w-[450px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] border border-gray-200 rounded-2xl -translate-1/2 p-4">
          <h2 className="text-center text-2xl  lg:text-3xl font-semibold capitalize">
            Thank you
          </h2>
          <div className="mt-2 flex flex-col items-center content-center">
            <p className="text-center lowercase font-semibold">for shop at</p>
            <div className="w-[300px] h-auto content-center">
              <img
                src="/images/logo.png"
                alt="BrandLogo"
                className="h-full w-full object-center object-contain"
              />
            </div>
            <Link
              className="px-4 py-2 bg-green-500 text-white font-semibold text-lg rounded"
              href={"/"}
            >
              Shop Again
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

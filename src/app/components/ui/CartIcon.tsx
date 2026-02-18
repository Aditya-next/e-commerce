
'use client'
import React from 'react'
import { BaggageClaim } from 'lucide-react'
import { useAppSelector } from '@/app/lib/hooks'
import Link from 'next/link'

const CartIcon = () => {

    const item = useAppSelector(state => state.cart.items)

    return (
        <Link href='/cart'>
            <div className="rounded-full border p-2 hover:bg-gray-100 relative"><BaggageClaim className="w-5 h-5" />
                <div className=" p-2 h-4 w-4 bg-red-500 text-white font-semibold right-0 -top-1 flex items-center justify-center rounded-full absolute text-[8px]"><p>{item.length}</p></div>
            </div>
        </Link>
    )
}

export default CartIcon

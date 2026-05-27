import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number | string
  [key: string]: any
}

interface CartState {
  items: CartItem[]
}

const getInitialState = (): CartState => {
  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('items')

    return {
      items: items ? JSON.parse(items) : [],
    }
  }

  return {
    items: [],
  }
}

const initialState: CartState = getInitialState()

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)

      if (typeof window !== 'undefined') {
        localStorage.setItem('items', JSON.stringify(state.items))
      }
    },

    deleted: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )

      if (typeof window !== 'undefined') {
        localStorage.setItem('items', JSON.stringify(state.items))
      }
    },
    //only use if customer place order then clear our store
    clearCart: (state)=>{
      state.items = []
       if (typeof window !== 'undefined') {
        localStorage.setItem('items', JSON.stringify(state.items))
      }
    }
  },
})

export const { add, deleted, clearCart } = cartSlice.actions

export default cartSlice.reducer
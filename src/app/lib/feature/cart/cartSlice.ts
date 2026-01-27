import { createSlice } from '@reduxjs/toolkit'


export const initialState: any = {
    items: JSON.parse(localStorage.getItem('items') || '[]')
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload);
            // Optionally update localStorage
            localStorage.setItem('items', JSON.stringify(state.items));
        },
        deleted: (state, action) => {
            console.log("action", action)
            state.items = state.items.filter((item: any) => item.id !== action.payload);
            localStorage.setItem('items', JSON.stringify(state.items)); // Optional: keep localStorage in sync
        }
    },
}
)

// Action creators are generated for each case reducer function.
export const { add, deleted } = cartSlice.actions

export default cartSlice.reducer
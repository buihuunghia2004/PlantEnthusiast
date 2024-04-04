import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // kiểm tra sp có trong giỏ hàng
      const index = state.user.cart
        .findIndex(item => item.id.toString() ==
          action.payload.id.toString());
      if (index >= 0) {
        if (state.user.cart[index].quantity != 1 || action.payload.quantity > 0) {
          state.user.cart[index].quantity += action.payload.quantity;
        }
      } else {
        state.user.cart = [...state.user.cart, action.payload];
      }
      console.log(state.user, 'ddddddd');
    },
    removeItemToCart: (state, action) => {
      const cartCopy = [...state.user.cart]
      const index = cartCopy.findIndex(item => item.id.toString() ==
        action.payload.id.toString())
      cartCopy.splice(index, 1)
      state.user.cart = [...cartCopy]
    },
    clearAllItemToCart: () => {
      state.user.cart = []
    },
    loadUser: (state, action) => {
      state.user = action.payload
    },
    logout: (state, action) => {
      state.user = null;
    }
  }
  // extraReducers: (builder) => {
  //     builder.addCase(login.pending, (state, action) => {
  //         console.log("...Pending");
  //     });
  //     builder.addCase(login.fulfilled, (state, action) => {
  //         state.user = action.payload;
  //     });
  //     builder.addCase(login.rejected, (state, action) => {
  //         console.log("...Rejected");
  //     });
  // }
});

export const { addItemToCart,removeItemToCart, logout, loadUser } = appSlice.actions;
export default appSlice.reducer;
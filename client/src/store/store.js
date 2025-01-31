import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import adminProductsSlice from './admin/products-slice/index'
import shopProductsSlice from './shop/products-slice/index'
// import adminProducts from '@/pages/admin-view/products';
import shoppingCartSlice from './shop/cart-slice/index'



const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts : adminProductsSlice,
        shopProducts : shopProductsSlice,
        shopCart : shoppingCartSlice,
    }
})

export default store;

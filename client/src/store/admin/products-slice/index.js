import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    isLoading : false,
    productList : []
}

export const addNewProduct = createAsyncThunk(  "/products/addnewproduct", async (formData)=>{
    const result = await axios.post("http://localhost:5000/api/admin/products/add", formData, 
        {
        headers:{
            "Content-Type": "application/json",
        }
    })
    return result?.data
})
export const fetchAllProducts = createAsyncThunk('/product/fetchAllProducts', async ()=>{
    const result = await axios.get("http://localhost:5000/api/admin/products/get", 
        {
       headers:{
           'Content-type' : 'application/json'
        }
    }) 

    return result?.data
})
export const deleteProduct = createAsyncThunk('/product/deleteProduct', async (id)=>{
    const result = await axios.delete(`http://localhost:5000/api/admin/products/delete/${id}`

    )
    return result?.data
})
export const editProduct = createAsyncThunk('/product/editProduct', async ({id,formData})=>{
    const result = await axios.put(`http://localhost:5000/api/admin/products/edit/${id}`, formData, 
        {
        headers:{
            'Content-type' : 'application/json'
        }
    })
    return result?.data
})

const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState,
    reducers :{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchAllProducts.pending, (state)=>{
            state.isLoading = true
        }).addCase(fetchAllProducts.fulfilled, (state, action)=>{
            // console.log(action.payload)
            state.isLoading = false
            state.productList = action.payload.data
        }).addCase(fetchAllProducts.rejected, (state, action)=>{
            // console.log(action.payload)
            state.isLoading = false
            state.productList = []
        })
    }
})
export default adminProductsSlice.reducer
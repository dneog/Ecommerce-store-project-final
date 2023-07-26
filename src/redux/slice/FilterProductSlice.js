import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    filteredProducts: []
}

const FilterProductSlice=createSlice({
    name: 'filtered',
    initialState,
    reducers: {
        SEARCH_PRODUCTS(state, action){
            const {searchText, ProductData}= action.payload
            let newSearchedProducts
            if(searchText !== ''){
                newSearchedProducts= ProductData.filter((item)=> item.name.toLowerCase().includes(searchText.toLowerCase()))
            }else{
              newSearchedProducts= ProductData
            }
            state.filteredProducts= newSearchedProducts
        },
        SORT_BY_LATEST(state, action){
            const {productSort, ProductData}= action.payload
            let newSortedProducts=[]
            if(productSort=== 'latest'){
               newSortedProducts= ProductData.slice().sort((a,b)=> {
                    return b.id- a.id
                })
            }
            if(productSort=== 'low_to_high_price'){
               newSortedProducts= ProductData.slice().sort((a,b)=> {
                    return a.price- b.price
                })
            }
            if(productSort=== 'high_to_low_price'){
               newSortedProducts= ProductData.slice().sort((a,b)=> {
                    return b.price- a.price
                })
            }

            state.filteredProducts= newSortedProducts
        },
        SORT_BY_CATEGORY(state, action){
        const {category, ProductData}= action.payload
        let newCategory= []
        if(category=== 'All'){
            newCategory= ProductData
        }else{
            newCategory= ProductData.filter((product)=> product.category=== category)
        }
        state.filteredProducts= newCategory
        },
        SORT_BY_BRAND(state, action){
        const {brand, ProductData}= action.payload
        let newBrand= []
        if(brand=== 'All'){
            newBrand= ProductData
        }else{
            newBrand= ProductData.filter((product)=> product.brand=== brand)
        }
        state.filteredProducts= newBrand
        },
    }

    
})

export const {SEARCH_PRODUCTS, SORT_BY_LATEST, SORT_BY_CATEGORY, SORT_BY_BRAND}= FilterProductSlice.actions;
export const selectFilteredProducts =(state)=> state.filtered.filteredProducts;
export default FilterProductSlice.reducer
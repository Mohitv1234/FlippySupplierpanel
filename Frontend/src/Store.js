import { legacy_createStore as createStore ,combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {SellerReducer } from "./Reducers/SellerReducer"
import { ProductDetailsReducer, ProductReducer, ProductsReducer } from "./Reducers/productReducers"
import { CouponsDeleteReducer, CouponsDetailsReducer, CouponsReducer } from "./Reducers/couponReducers"

const reducer =combineReducers({
    seller:SellerReducer,
    products:ProductsReducer,     //get all product
    productDetails :ProductDetailsReducer,  // single product details
    product:ProductReducer, 
    coupons:CouponsReducer,     //get all coupon
    couponDetails :CouponsDetailsReducer,  // single coupon details
    coupondelete:CouponsDeleteReducer, 
})


let initialState ={}
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
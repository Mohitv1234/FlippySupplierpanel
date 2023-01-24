import {

    REGISTER_SELLER_REQUEST,
    REGISTER_SELLER_SUCCESS,
    REGISTER_SELLER_FAIL,


    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,



    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    LOAD_SELLER_REQUEST,
    LOAD_SELLER_SUCCESS,
    LOAD_SELLER_FAIL,

    CLEAR_ERRORS } from "../Constants/SellerConstant"

//Login

export const SellerReducer = (state = {seller:{}}, action)=>{
   switch (action.type) {
       case LOGIN_REQUEST:
        case   REGISTER_SELLER_REQUEST:
           case LOAD_SELLER_REQUEST:
           return{
               loading:true,
               isAuthenticatedSeller:false
           }
           case LOGIN_SUCCESS:
           case REGISTER_SELLER_SUCCESS:
           case LOAD_SELLER_SUCCESS:

               return{
                   ...state,
                   loading:false,
                   isAuthenticatedSeller:true,
                   seller:action.payload,

               }
               case LOGOUT_SUCCESS:
                       return{
                           loading:false,
                           seller:null,
                           isAuthenticatedSeller:false
                       }
               case LOGIN_FAIL:
                case REGISTER_SELLER_FAIL:
                   return{
                       ...state,
                       loading:false,
                       isAuthenticatedSeller:false,
                       seller:null,
                       error:action.payload
                   }

                   case LOAD_SELLER_FAIL:
                       return{
                           loading:false,
                           isAuthenticatedSeller:false,
                           seller:null,
                           error:action.payload
                       }

                       case LOGOUT_FAIL:
                           return{
                               ...state, 
                               loading:false,                              
                               error:action.payload
                           }


                   case CLEAR_ERRORS:
                       return{
                           ...state,
                           error:null
                       }
       default:
         return state;
   }
 
   }



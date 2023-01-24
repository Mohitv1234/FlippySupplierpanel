import { ALL_COUPON_REQUEST,
    ALL_COUPON_SUCCESS,
     ALL_COUPON_FAIL ,


     DELETE_COUPON_REQUEST,
     DELETE_COUPON_SUCCESS, 
     DELETE_COUPON_FAIL ,

     COUPON_DETAILS_REQUEST,
     COUPON_DETAILS_SUCCESS, 
     COUPON_DETAILS_FAIL ,
     
     
     CLEAR_ERRORS,
     DELETE_COUPON_RESET} from "../Constants/couponConstants"


//ALL COUPONS
export const CouponsReducer = (state = {coupon :{}}, action)=>{
    
switch (action.type) {
  case ALL_COUPON_REQUEST:        
     return{
          loading:true,
          coupons:[]
     }

     
     case ALL_COUPON_SUCCESS:        
     return{
          loading:false,
          coupons:action.payload.coupons,
          couponsCount:action.payload.couponsCount,
     }

     case ALL_COUPON_FAIL:        
     return{
          loading:false,
          error:action.payload
     }
     case CLEAR_ERRORS:        
     return{
         ...state,
         error:null
     }
  default:
      return state
};



}






// DELETE PRODUCT
export const CouponsDeleteReducer = (state = {}, action)=>{
   switch (action.type) {
       case  DELETE_COUPON_REQUEST:        
          return{ 
             ...state,
               loading:true,
              
          }
   
          case  DELETE_COUPON_SUCCESS:        
          return{
             ...state,
               loading:false,
               isDeleted:action.payload
              
          }
   
          case  DELETE_COUPON_FAIL:        
          return{
               ...state,            
               loading:false,
               error:action.payload
          }

          case  DELETE_COUPON_RESET:        
          return{
              ...state,
              isDeleted:false
          }
          case CLEAR_ERRORS:        
          return{
              ...state,
              error:null
          }
       default:
           return state
   };
   
   
   
   }









// PRODUCT DETAILS
export const CouponsDetailsReducer = (state = {product:{}}, action)=>{
   switch (action.type) {
       case COUPON_DETAILS_REQUEST:        
          return{
               loading:true,
               ...state
          }
   
          case  COUPON_DETAILS_SUCCESS:        
          return{
               loading:false,
               coupon:action.payload,
               user_id:action.payload.user_id       
          }
   
          case COUPON_DETAILS_FAIL:        
          return{
               loading:false,
               error:action.payload
          }
          case CLEAR_ERRORS:        
          return{
              ...state,
              error:null
          }
       default:
           return state
   };
   
   
   
   
   
   
   
   
   
   
   }
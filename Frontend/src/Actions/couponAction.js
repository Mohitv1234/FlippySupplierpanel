import axios from "axios"
import { ALL_COUPON_REQUEST,
     ALL_COUPON_SUCCESS,
      ALL_COUPON_FAIL ,


      DELETE_PRODUCT_REQUEST,
      DELETE_PRODUCT_SUCCESS, 
      DELETE_PRODUCT_FAIL ,

      PRODUCT_DETAILS_REQUEST,
      PRODUCT_DETAILS_SUCCESS, 
      PRODUCT_DETAILS_FAIL ,
      
      
      CLEAR_ERRORS} from "../Constants/couponConstants"

      export const getCouponSeller = ()=>async (dispatch)=>{
        try {
            
            dispatch({
                type:ALL_COUPON_REQUEST
            })
    
           const {data} = await axios({
                method: 'get',
                url: `/api/flippy/v1/seller/all/coupons`,
                withCredentials: false,
               
              });
            dispatch({
                type:ALL_COUPON_SUCCESS,
                payload:data,
            })
        } catch (error) {
            dispatch({
                type: ALL_COUPON_FAIL,
                payload:error.response.data.error
            }) 
        }
    }
    

    
// clear Errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })


}
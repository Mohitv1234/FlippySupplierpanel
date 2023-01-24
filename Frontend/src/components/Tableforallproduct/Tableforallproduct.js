import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  clearErrors,
  getProductSeller,
} from "../../Actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";


export default function Tableforallproduct({ data }) {
    const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading, error, products, productCount, filterProductCount } = useSelector(
    (state) => state.products
  );


 
  useEffect(() => {
    if (error) {
      alert.error(
        <>
          <div style={{ color: "white" }}>{error}</div>
        </>
      );
      dispatch(clearErrors());
    }

    dispatch(getProductSeller());
},[dispatch, error, alert, navigate])
    return (
        <table class="table text-start w-100" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
                <tr className='p-2' style={{background:'rgb(245,247,249)'}} >
                    <th scope="col" className='m-0 py-3'>#</th>
                    <th scope="col" className='m-0 py-3'>Product</th>
                    <th scope="col" className='m-0 py-3'>Stock</th>
                    <th scope="col" className='m-0 py-3'>Price</th>
                    <th scope="col" className='m-0 py-3'>Order</th>
                    <th scope="col" className='m-0 py-3'>Rating</th>
                    <th scope="col" className='m-0 py-3'>Published</th>
                    <th scope="col" className='m-0 py-3'>Status</th>
                    <th scope="col" className='m-0 py-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {products && products.map((data) => {
                    return (
                        <tr className='border m-0 p-0'>
                            <th scope='row'> <input style={{ fontSize: `10px` }} type="checkbox" className='mt-2'/></th>
                            <th scope='row' className='mt-0 px-1 productcol1'>
                                <div className='productrecomendationimgtable text-start'>
                                    <img src={data.thumbnail_img} alt="" />
                                    <div>
                                    <h4 style={{ fontSize: '.9rem', marginBottom: "-10px" }}>{data.name}</h4>
                                        <p style={{ fontSize: '.7rem',marginBottom:`0px` }}>Category : {data.category}</p>
                                    </div>
                                </div>
                            </th>
                            
                            <td>{data.current_stock}</td>
                            <td>₹{data.unit_price}</td>
                            <td>{data.order_count}</td>
                            <td><p><span className='mx-0' style={{ fontSize: '15px', color: '#fcb826' }}>☆</span><span style={{ marginLeft: '3px' }}>{data.ratings}</span> </p></td>
                            <td>
                                <div class="form-check form-switch">
                                    {data.published ? (
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                    ) : (
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    )}

                                </div>
                            </td>
                            <td  >
                            {data.published ? (
                                <p className= "rounded-pill bg-success p-2 text-success bg-opacity-10 text-success px-3" style={{ height: "fit-content", width: "fit-content" }}>Published</p>
                            ):(<p className="px-3 rounded-pill bg-dark p-2 text-dark bg-opacity-10 text-secondary" style={{ height: "fit-content", width: "fit-content" }}>Draft</p>)
                        }
                        </td>
                            <td  > <span className='rounded text-dark' style={{ padding: '6px 9px', background: `#F1F8FD`, color: '#164C96', width: `1rem`, height: '1rem', fontSize: ".8rem", fontWeight: "800" }}>⋯</span></td>
                        </tr>
                    )
                })}
            </tbody>
                
        </table>
    )
}

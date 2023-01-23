import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./DataForRtoTable";
import "./Rto_manage.css";


export default function TableForRto() {
    return (
        <table  className="text-nowrap mt-4 table table-content-coupon w-100" style={{ text:"no-wrap", overflow: 'auto',  fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead >
                <tr className=' p-2  text-dark bg-opacity-10 bg-dark' style={{backgroundColor:"#F9FAFB"}} >
                    <th scope="col" className='m-0 p-1 text-center '>#</th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0 mb-1">
                            <p style={{ marginBottom: `0px` }}>Product ID</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className=' p-1'style={{ margin: `0px` ,  }}>
                        <div className="d-flex pt-0" style={{paddingTop:"10px"}}>
                            <p style={{ marginBottom: `0px`,  }}>Product</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    {/* <th scope="col" className='m-0 p-1'>Product </th> */}
                    <th scope="col" className='m-0 p-1'>Category</th>
                    <th scope="col" className='m-0 p-1'>Order Deliver</th>
                    <th scope="col" className='m-0 p-1'>Customer Return</th>
                    <th scope="col" className='m-0 p-1'>RTO Return</th>
                    <th scope="col" className='m-0 p-1'>Return Rate</th>
                    <th scope="col" className='m-0 p-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((data) => {
                    return (
                        <tr className='border m-0 p-0'>
                            <th scope='row' style={{paddingTop:"20px"}}> <input id='checkbox-rto' style={{ fontSize: `10px`, marginRight:"-20px" }} type="checkbox" className='mt-2' /></th>
                            <th scope='row' className='  productcol1' style={{fontWeight: '600',paddingTop:"25px", fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                                {data.product_id}
                            </th>

                            <td className='px-2'><div className="prod-img"><div className="product-img"><img src="https://img.lovepik.com/element/40027/2204.png_300.png" alt="" /></div>{data.product} </div></td>
                            <td className='px-2' style={{paddingTop:"25px"}}>{data.category}  </td>
                            <td style={{paddingTop:"25px"}}>{data.order_deliver}</td>
                            <td style={{paddingTop:"25px"}}>{data.customer_return}</td>
                            <td style={{paddingTop:"25px"}}>{data.rto_return}</td>
                            <td className='px-2' style={{fontWeight: '600',fontSize: `14px`, lineHeight: `20px`,color:`#344054`, paddingTop:"25px"}}>
                                <div className="d-flex gap-1">
                                <div className="rto-second-right " style={{marginRight:"0px",display:"flex", width:"65px",}}><p><i style={{transform:"rotate(120deg)"}} class="las upp la-arrow-right"></i>10.5%</p></div>
                                </div>{data.return_rate}
                            </td>
                            
                            <td className='px-0' style={{paddingTop:"20px"}}>{data.action}
                               <div className="view-details"><h5>View Details</h5></div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    )
    
}
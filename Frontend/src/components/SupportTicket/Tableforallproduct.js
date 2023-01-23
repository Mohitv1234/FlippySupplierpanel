import React from 'react'
import "./SupportTicket.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./TableData";
// import "./Styleforallcoupon.css"

export default function Tableforallproduct() {
    return (
        <table className=" table table-content-coupon w-100 mt-3" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
                <tr className='bg-dark p-2 text-dark bg-opacity-10' >
                    <th scope="col" className='m-0 p-1'>#</th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0">
                            <p style={{ marginBottom: `0px` }}>Ticket Id</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1'>Subject</th>
                    <th scope="col" className='m-0 p-1'>Priority</th>
                    <th scope="col" className='m-0 p-1'>Sending Date</th>
                    <th scope="col" className='m-0 p-1'>Status</th>
                    <th scope="col" className='m-0 p-1'>Action</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((data) => {
                    return (
                        <tr className='border m-0 p-0'>
                            <th scope='row'> <input style={{ fontSize: `10px` }} type="checkbox" className='mt-2' /></th>
                            <th scope='row' className='mt-0 px-1 productcol1' style={{fontWeight: '600',fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                                {data.coupon_id}
                            </th>

                            <td style={{textTransform :"capitalize" }} >{data.coupon_code} <i class="las la-copy fs-5" style={{color:'#164C96'}}></i></td>
                            <td><span >o</span> {data.type}</td>
                            <td>{data.end_date}</td>
                            <td > 
                            <p id={data.status==="Recieved" ? "colorGreen" : "colorRed"}>{data.status}</p>
                             </td>
                            
                            <td>
                                <button className='rounded-pill' id="viewDetails" >View Deatails</button>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
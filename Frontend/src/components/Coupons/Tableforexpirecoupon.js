import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Data from "./Dataforlistexpire.js"

export default function Tableforallproduct() {
    return (
        <table class="table table-content-coupon  w-100" style={{ overflow: 'auto', fontSize: `12px`, fontWeight: `600`, fontSize: `14px`, lineHeight: `20px`, color: `#667085` }}>
            <thead>
            <tr className='text-dark' style={{ background:'#F5F7F9'}} >
                    <th scope="col" className='m-0 p-1'>#</th>
                    <th className='m-0 px-2 pb-0 pt-0' style={{ margin: `0px` }}>
                        <div className="d-flex pt-0">
                            <p style={{ marginBottom: `0px` }}>Coupon Id</p>
                            <div className="d-flex flex-column mx-1" ><ArrowDropUpIcon fontSize='10px' /><ArrowDropDownIcon fontSize='10px' style={{ marginTop: '-10px' }} /></div>
                        </div>
                    </th>
                    <th scope="col" className='m-0 p-1'>Coupon Code</th>
                    <th scope="col" className='m-0 p-1'>Type</th>
                    <th scope="col" className='m-0 p-1'>Start Date</th>
                    <th scope="col" className='m-0 p-1'>End Date</th>
                    <th scope="col" className='m-0 p-1'>Discount</th>
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

                            <td>{data.coupon_code} <i class="las la-copy fs-5" style={{color:'#164C96'}}></i></td>
                            <td>{data.type}</td>
                            <td>{data.start_date}</td>
                            <td>{data.end_date}</td>
                            <td className='text-success'>{data.discount}</td>
                            <td style={{fontWeight: '600',fontSize: `14px`,lineHeight: `20px`,color:`#344054`}}>
                                <div className="btn shadow-none d-flex align-items-center border border-danger gap-1 p-1 px-3 rounded-pill" style={{width:'fit-content',color:'#B42318'}}><i class="las la-trash-alt fs-5"></i><p className='pb-0 mb-0' style={{width:'fit-content'}}>Delete</p></div>
                            </td>
                            
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

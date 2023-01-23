import React from 'react'

export default function Tableforallproduct({ data }) {
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
                {data.map((data) => {
                    return (
                        <tr className='border m-0 p-0'>
                            <th scope='row'> <input style={{ fontSize: `10px` }} type="checkbox" className='mt-2'/></th>
                            <th scope='row' className='mt-0 px-1 productcol1'>
                                <div className='productrecomendationimgtable text-start'>
                                    <img src={data.img} alt="" />
                                    <div>
                                    <h4 style={{ fontSize: '.9rem', marginBottom: "-10px" }}>{data.name}</h4>
                                        <p style={{ fontSize: '.7rem',marginBottom:`0px` }}>Category : {data.category}</p>
                                    </div>
                                </div>
                            </th>
                            
                            <td>{data.stock}</td>
                            <td>₹{data.price}</td>
                            <td>{data.order}</td>
                            <td><p><span className='mx-0' style={{ fontSize: '15px', color: '#fcb826' }}>☆</span><span style={{ marginLeft: '3px' }}>{data.rating}</span> </p></td>
                            <td>
                                <div class="form-check form-switch">
                                    {data.published ? (
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked />
                                    ) : (
                                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    )}

                                </div>
                            </td>
                            <td  ><p className={data.status === "Published" ? "rounded-pill bg-success p-2 text-success bg-opacity-10 text-success px-3" : "px-3 rounded-pill bg-dark p-2 text-dark bg-opacity-10 text-secondary"} style={{ height: "fit-content", width: "fit-content" }}>{data.status}</p></td>
                            <td  > <span className='rounded text-dark' style={{ padding: '6px 9px', background: `#F1F8FD`, color: '#164C96', width: `1rem`, height: '1rem', fontSize: ".8rem", fontWeight: "800" }}>⋯</span></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

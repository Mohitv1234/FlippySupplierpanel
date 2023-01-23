import React from 'react'
import "./Collepse.css"
export default function Collepase() {
  return (
<div class="offcanvas offcanvas-end text-start p-4" style={{zIndex:9999, overflow:'auto'}} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
<div class="offcanvas-header">
    <p class="offcanvas-title" id="offcanvasRightLabel">Add New Coupon</p>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <hr />
  <form >
  <div className="partoffcanva">

  <h4>Coupon Type</h4>
  <select
        className=" form-select p-2 px-3 border"
        aria-label="Default select example"
      >
        <option selected>For Product</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  
  <div className="partoffcanva">
  <h4>Coupon code</h4>
  <div className="d-flex border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='border-0 px-2'
        placeholder='Flippy50'
        />
    <p style={{color:`#164C96`,fontWeight: `400`,marginBottom:'0px', fontSize: `14px`, lineHeight: `24px`}}>Generate Random</p>
    </div>
    </div>

  <div className="partoffcanva">

  <h4>Product</h4>
  <select
        className=" form-select p-2 px-3 border"
        aria-label="Default select example"
      >
        <option selected>Nothing Selected</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
  </div>
  <div className="partoffcanva">
  <h4>Start Date</h4>
  <div className="d-flex w-100 border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='w-100 border-0 px-2'
        placeholder='09/03/2022'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
    <i class="las la-calendar-alt"></i>
    </div>
  </div>
 
  <div className="partoffcanva">
  <h4>End Date</h4>
  <div className="d-flex w-100 border border-1 border-dark-subtittle rounded-3 align-items-center p-2">
  <input
        type="text"
        className='w-100 border-0 px-2'
        placeholder='09/03/2022'
        onChange={(e) => console.log(e.target.value)}
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
        />
    <i class="las la-calendar-alt"></i>
    </div>
  </div>
  <div className="row">
    <div className="col partoffcanva">
      <h4>Discount</h4>
      <select
        className=" form-select p-2 border px-3"
        aria-label="Default select example"
      >
        <option selected>Percentage</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="col partoffcanva ">
      <h4>Enter Percentage</h4>
      <input type="text" class="form-control p-2 px-3 border" placeholder="50%" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
  </div>
  <div className="btncon mt-4 " style={{display:'flex',justifyContent:'flex-end', gap:'5px'}}>
    <div className="btn rounded-pill" style={{backgroundColor:'#164C96', color:"white"}}>Save</div>
    <div className="btn rounded-pill border">Cancel</div>
  </div>
  </form>
</div>
  )
}

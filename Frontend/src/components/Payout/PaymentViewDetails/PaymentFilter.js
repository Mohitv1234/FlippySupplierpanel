import React from 'react'

const PaymentFilter = () => {
  return (
    <>
    <div className="container-fluid px-0" >
      <div className="container-fluid rounded bg-light p-2" >
          <div className="nav container-fluid p-0 d-flex align-items-center justify-content-between">
              <div className="leftpronav rounded-pill overflow-hidden p-1 d-flex gap-2 px-2 align-items-center border border-secondary-subtle">
                  <i className="las la-search" style={{fontSize:`1.5rem`}}></i>
              <form className="d-flex" role="search">
                  <input  style={{border:`none`, outline:`none`}} type="search" placeholder="Search" aria-label="Search" />
              </form>
              </div>
              <div className="rightpronav d-flex align-items-center justify-content-between gap-2">
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center">
                  <i class="las la-calendar"></i>
                  <p style={{marginBottom: `0px`, fontSize: `12px`}}>Jan 6, 2022-Jan 13, 2022</p>
                  </div>
                  <div className="rounded p-1 px-2 border border-secondary-subtle d-flex gap-2 align-items-center" style={{width:"fit-content"}}>
                  <i class="las la-filter"></i>
                  <p style={{marginBottom: `0px`, fontSize: `12px`}}>Filters</p>
                  </div>
              </div>
          </div>

          </div>
          </div>
      
    </>
  )
}

export default PaymentFilter

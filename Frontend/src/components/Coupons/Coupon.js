import { red } from '@mui/material/colors'
import { color } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Navforallproduct from './NavforallCoupon'
import SecondNavproduct from '../Include/SecondNavProduct'
import "./Styleforallcoupon.css"
import Data from "./Dataforlist"
import "./Styleforallcoupon.css"
import Collepase from './Collepase'


export default function Product() {
    return (
   
      <div className='Productspplyer text-nowrap p-0 container-fluid rounded' style={{ backgroundColor: `#F5F7F9` }}>
     
     
     
      <SecondNavproduct  Name={{name:"All Coupons", directory:"Home > Coupons"}} Btn={[{name:"Add New",style: "bluebtn", icon:'las la-plus-circle',databstoggle:'offcanvas',databstarget:'#offcanvasRight',ariacont:'offcanvasRight'}]}/>
     
     
     <div className="container-fluid px-3">
      <div className="container-fluid rounded mt-3 bg-light p-2 pt-3">
          <div className="nav container-fluid p-0 d-flex align-items-center justify-content-between">
              <div className="leftpronav rounded-4 overflow-hidden p-1 d-flex gap-2 px-2 align-items-center border border-secondary-subtle">
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
            <Navforallproduct />
            <Collepase/>
      </div> 
      </div>
  </div>
    )
}


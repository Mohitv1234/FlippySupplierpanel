import React from 'react'
import SecondNavProduct from '../Include/SecondNavProduct'
import AddNewTicket from './AddNewTicket'
import Navforallproduct from './NavforAllProduct'
import Tableforallproduct from './Tableforallproduct'
const SupportTicket = () => {

    return (
        <>

            <div className='container-fluid p-0'>

            <SecondNavProduct  Name={{name:"All Coupons", directory:"Home > Coupons"}} Btn={[{name:"Add New",style: "bluebtn", icon:'las la-plus-circle',databstoggle:'offcanvas',databstarget:'#offcanvasRight',ariacont:'offcanvasRight'}]}/>
                <Navforallproduct />
                <AddNewTicket />
            </div>
        </>
    )
}

export default SupportTicket
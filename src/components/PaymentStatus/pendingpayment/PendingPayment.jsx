import React from 'react'
import'./pendingpayment.css'

import { IoMdArrowDropdown } from "react-icons/io";

const PendingPayment = () => {
  return (
    <div className='pending'>Authorized <IoMdArrowDropdown style={{marginLeft:'4px'}}/> </div>
  )
}

export default PendingPayment
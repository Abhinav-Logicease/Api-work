import React, { useEffect, useState } from 'react'
import './order.css'
import OrderListComponents from '../../components/orderlist components/OrderListComponents'
import Unfilled from '../../components/unfiled/Unfilled'
import Fulfilled from '../../components/fulfilled/Fulfilled'
import Pending from '../../components/pending/Pending'
import Paid from '../../components/PaymentStatus/paidpayment/Paid'
import PendingPayment from '../../components/PaymentStatus/pendingpayment/PendingPayment'
import Header from '../../components/header/Header'
const info=[
  {
    id:'121 091',
    created:'Aug 1,2019',
    customer:'Abhinav',
    fulfillment:<Unfilled/>,
    Total:'604.50',
    Profit:'182.50',
    Status:<PendingPayment/>,
    Updated:'Today'
},{
  id:'121 090',
  created:'Jul 21,2019',
  customer:'Sahil',
  fulfillment:<Pending/>,
  Total:'1175.50',
  Profit:'524.25',
  Status:<Paid/>,
  Updated:'Today'
},{
  id:'121 058',
  created:'Jul 16,2019',
  customer:'Varun',
  fulfillment:<Fulfilled/>,
  Total:'175.50',
  Profit:'78',
  Status:<PendingPayment/>,
  Updated:'Yesterday'
},{
  id:'120 999',
  created:'Jul 17,2019',
  customer:'Gaurav',
  fulfillment:<Fulfilled/>,
  Total:'402.50',
  Profit:'83',
  Status:<PendingPayment/>,
  Updated:'Jul 26,2019'
},{
  id:'121 049',
  created:'Jul 19,2019',
  customer:'Sahil',
  fulfillment:<Fulfilled/>,
  Total:'178',
  Profit:'27.15',
  Status:<Paid/>,
  Updated:'Jul 26,2019'
}
,{
  id:'121 094',
  created:'Jul 27,2019',
  customer:'Tushar',
  fulfillment:<Pending/>,
  Total:'824.50',
  Profit:'113.50',
  Status:<Paid/>,
  Updated:'Jul 26,2019'
},{
  id:'121 001',
  created:'Jul 19,2019',
  customer:'Taran',
  fulfillment:<Unfilled/>,
  Total:'175.50',
  Profit:'18.50',
  Status:<Paid/>,
  Updated:'Jul 26,2019'
}
]


const Order = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    const fetchData = info
    setData(fetchData)
  },[])
  console.log(data);
  const style = {backgroundColor:'#624E88'}
  return (
    <>
    <Header backarrow={true } style={style}/>
    <OrderListComponents user={info}/></>
  )
}

export default Order
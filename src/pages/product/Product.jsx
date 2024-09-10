import React, { useEffect, useState } from 'react'
import ProductData from '../../components/productData/ProductData'
import Header from '../../components/header/Header'
import './product.css'

const Product = () => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        try{
            setLoading(true)
            const result = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        console.log(result.products);
        setData(result.products)
        setLoading(false)
        }catch(error){
            console.error(error)
            setError(error.message)
        }
    }
    
    if(loading) return<div className='spinner'></div>
    if(error) return<div>Error. {error}</div>
 
    const style = {backgroundColor:'#6C4E31'}
    return (
      <>
      <Header backarrow={true } style={style}/>
      <ProductData  data={data}/>
    </>
  )
}

export default Product

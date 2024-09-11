import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import './user.css'
import UserComponent from '../../components/user/UserComponent'

const Users = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        try{
            setLoading(true)
            const result = await fetch('https://dummyjson.com/users')
        .then(res => res.json())
        console.log(result.users);
        setData(result.users)
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
      <UserComponent  data={data}/>
    </>
  )
}

export default Users

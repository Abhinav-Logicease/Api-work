import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const About = () => {
  const style = {backgroundColor:'#16423C'}
  return (
    <div>
        <Header backarrow={true} style={style}/>
        About Page
        <Footer/>
    </div>
  )
}

export default About
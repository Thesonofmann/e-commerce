import React from 'react'
import './header.scss'
import Head from './head'
import Search from './search'
import Navbar from './navbar'

const header = () => {
  return (
    <div>
      <Head/>
      <Search/>
      <Navbar/>
    
    </div>
  )
}

export default header

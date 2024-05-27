import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor:'#DEDBDA'}}>
      <div>
        <h4 style={{marginLeft:'10px'}}>Redux Tutorial</h4>
      </div>
      <div style={{ marginTop: '20px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-evenly', width: '25%' }}>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/cart">Cart</Link>
        <span>Cart Items : 0</span>
      </div>
    </div>
  )
}

export default Navbar

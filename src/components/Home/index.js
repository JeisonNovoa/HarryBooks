import React from 'react'
import Portada from "../../images/portada.jpeg"
import {Link} from "react-router-dom"


export const Home = () => {
  return (
    <div className='home'>
        <Link to="/">
          <h1>Inicio</h1>
        </Link>
        <Link to="/products">
          <h1>Products</h1>
        </Link>
        <img src={Portada} alt='inicio'></img>
    </div>
  )
}

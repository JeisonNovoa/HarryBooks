import React, {useContext} from 'react'
import HarryPotter from "../../images/logo.png"
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/Dataprovider'

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [cart] = value.cart

    const toogleMenu = ()=>{
        setMenu(!menu)
    }

  return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src={HarryPotter} alt='logo' width="150px"/>
            </div>
        </Link>
        <ul>
            <li>
                <Link to='/'>INICIO</Link>
            </li>
            <li>
                <Link to='/products'>PRODUCTS</Link>
            </li>
        </ul>
        <div className='cart' onClick={toogleMenu}>
            <box-icon name="cart"></box-icon>
            <span className='item-total'>{cart.length}</span>
        </div>
    </header>
  )
}

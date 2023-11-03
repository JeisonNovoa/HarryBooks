import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from '../../context/Dataprovider'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const [detail, setDetail] = useState([]);
    const params = useParams();
    
    useEffect(() =>{
        products.forEach(product =>{
            if(product.id === parseInt(params.id)){
                setDetail(product)
            }
        })
    }, [params.id, products])

  return (
    <>
        {
            <div className='details'>
                <h2>{detail.title}</h2>
                <p className='price'>${detail.price}</p>
                <button onClick={()=>addCart(detail.id)}>Add to cart</button>
                <img src={detail.image} alt={detail.title}/>
                <div className='description'>
                    <p><b>Description:</b>{detail.description}</p>
                </div>
            </div>
        }
    </>
  )
}

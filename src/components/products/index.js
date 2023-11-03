import React, {useContext} from "react";
import { DataContext } from "../../context/Dataprovider";
import { ProductosItem } from "./ProductosItem";
export const ProductList = () => {

  const value = useContext(DataContext)
  const [products] = value.products

  console.log(products);
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="products">
        {
          products.map(product =>(
            <ProductosItem 
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.icategory}
              cantidad={product.cantidad}
            />
          ))
        }
      </div>
    </>
  );
};

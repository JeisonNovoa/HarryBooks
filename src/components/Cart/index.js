import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;
  const [products, setProducts] = value.products; // Agrega el estado de productos desde el contexto

  const toogleFalse = () => {
    setMenu(false);
  };

  const buyBook = () => {
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.id);

      if (product) {
        if (item.cantidad <= product.cantidad) {
          const newQuantity = product.cantidad - item.cantidad;
          updateProductQuantity(item.id, newQuantity);
        } else {
          window.alert(
            `No hay suficiente stock para el producto: ${product.title}`
          );
        }
      } else {
        window.alert(`El producto con id ${item.id} no fue encontrado.`);
      }
    });

    setCart([]);
    window.alert("La compra se ha completado exitosamente.");
  };
  const updateProductQuantity = (id, newQuantity) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, cantidad: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const show1 = menu ? "cart-elements show" : "cart-elements";
  const show2 = menu ? "cart-element show" : "cart-element";

  const subtract = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.cantidad > 1) {
        return { ...item, cantidad: item.cantidad - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const add = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const product = products.find((product) => product.id === id);
        if (product && item.cantidad < product.cantidad) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to remove this product?")) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="cart_close" onClick={toogleFalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Your cart</h2>
        <div className="cart_center">
          {cart.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                fontSize: "3rem",
              }}
            >
              {" "}
              Empty cart
            </h2>
          ) : (
            <>
              {cart.map((product) => (
                <div className="cart_item" key={product.id}>
                  <img src={product.image} alt="" />
                  <div>
                    <h3>{product.title}</h3>
                    <p className="price">${product.price}</p>
                  </div>
                  <div className="cont">
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => add(product.id)}
                    ></box-icon>
                    <p className="amount">{product.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => subtract(product.id)}
                    ></box-icon>
                  </div>
                  <div
                    className="remove_item"
                    onClick={() => removeProduct(product.id)}
                  >
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="cart_footer">
          <h3>Total: ${total}</h3>
          <button
            className="btn"
            onClick={() => {
              buyBook();
            }}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

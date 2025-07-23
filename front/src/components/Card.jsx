import React, { useContext, useState } from "react";

import { CartContext } from "../CartContext";
import { NavLink } from "react-router-dom";


 


function Card() {

  const { cart, removeFromCart ,setCart} = useContext(CartContext);

  // Stocker les quantités pour chaque produit
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Fonction pour mettre à jour la quantité
  const updateQuantity = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + change), // Empêcher les valeurs négatives
    }));
  };

  // Calcul du total
  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (quantities[item.id] || 1), 0).toFixed(2);





  // const handleCheckout = () => {
  
  //     setCart([]); 
  //   }
  




  return (
    <div className="container my-5">
      <div className="row">
        {/* Liste des produits */}
        <div className="col-md-8">
          <div className="row">
            {cart.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card h-100 text-center p-4">
                  <img src={item.image} className="card-img-top" alt={item.title} height="90px" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title.substring(0, 12)}</h5>
                    <p className="fw-bold">${item.price}</p>
                    
                    {/* Boutons de quantité */}
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="btn btn-outline-dark mx-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{quantities[item.id]}</span>
                      <button className="btn btn-outline-dark mx-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    
                    {/* Bouton de suppression */}
                    <button className="btn btn-danger mt-2" onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Résumé du panier */}
        <div className="col-md-4">
          <div className="bg-secondary text-white p-4 rounded">
            <h5>Total Articles: {totalItems}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            <NavLink to='/'>
               <button className="btn btn-warning w-100 mt-3" onClick={ ()=>{setCart([]);  alert("WELCOME ! ");}}>Checkout</button>
             </NavLink>
    
       



            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;












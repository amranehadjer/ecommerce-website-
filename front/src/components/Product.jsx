import React, { useEffect, useState ,useContext} from 'react'

import { Link, useParams } from 'react-router-dom'
import {CartContext} from '../CartContext'




function Product() {
   

    

    const { id } = useParams()
    const { addToCart,cart } = useContext(CartContext);
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(false)

    const isInCart = cart.some(item => item.id === parseInt(id)); //some virifier si il y a un item dans le cart avec l'id de la page actuelle


    useEffect(() => {
        const getProducts = async () => {


            setloading(true)
            try {

                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                setProduct(data)
                setloading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()
    }
    ,[id])


    const Loading = () => {
        return (
            <div>Loading...</div>
        )
    }

    const ShowProduct = () => {
        return (
            <div  className='panier'   >
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h3 className='display-5'>{product.title}</h3>
                    <p className='lead'>
                        Rating {product.rating && product.rating.rate}

                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className='fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p>{product.description}</p>

                    {isInCart ? (
                        <Link to="/cart" className="btn btn-success me-2">view cart</Link>
                    ) : (
                   
                    <button  
                    onClick={()=>addToCart(product)} 
                    className='btn btn-outline-dark'>Add to cart</button>
                )}




                </div>
            </div>



        )
    }



    return (


        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>

            </div>


        </div>
    )
}

export default Product
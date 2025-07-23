import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

function Products() {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  // const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    const getProducts = async () => {
 try{
                const response = await fetch(`https://fakestoreapi.com/products`)
                const data = await response.json()
                setData(data)
                
                setFilter(data)

                }catch(error){
                    console.log(error)
                    }
            }
            getProducts()



  }, [])



  // const Loading = () => {
  //   return <div>Loading...</div>
  // }



  const filterProduct=(cat)=>{
    const updatedliste=data.filter((i)=>i.category===cat)
    setFilter(updatedliste)
  }

  const ShowProduct = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-5 my-5 pb-5'>
          <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}> Men's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}> Women's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")} >Jewelery</button>
          <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>

        </div>

        {filter.map((product) => {
          return (
            <>
              <div className='col-md-3 mb-3 '>

                <div class="card h-100 text-center p-3" key={product.id}>
                  <img src={product.image} class="card-img-top " alt={product.title}  height="250px"/>
                  <div class="card-body">
                    <h5 class="card-title ">{product.title.substring(0,12)}</h5>
                    <p class="card-text fw-bold">${product.price}</p>
                    {/* <button className="btn  btn-outline-dark">Buy Now</button> */}
                    <NavLink to={ `/products/${product.id}` } >  <button className="btn  btn-outline-dark">Buy Now</button></NavLink>
                  </div>
                </div>

              </div>
            </>)
        })}






      </>
    );
  };


  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-6 fw-bolder text-center'>Products</h1>
            <hr />
          </div>
          <div className='row justify-content-center'>
            {/* {loading ? <Loading /> :  */}
            <ShowProduct />
            {/* } */}



          </div>

        </div>
      </div>
      {/* <Footer></Footer> */}

    </div>
  )
}

export default Products
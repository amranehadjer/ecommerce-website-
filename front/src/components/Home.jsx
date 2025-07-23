
import React from 'react'

import Products from './Products'

function Home() {
    return (
        <div>
            <div class="card text-bg-dark">
                <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/07/obsolescencia-percibida-modas-te-dicen-movil-ya-no-vale.jpg?tf=2048x" className="card-img  " height='550px' alt="..." />
                <div className="card-img-overlay d-flex flex-column  justify-content-center">
                    <h1 className="card-title disply-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h1>
                    <p className="card-text lead fs-2">CHECK OUT THE TRENDS.</p>
                    
                </div>
            </div>
           <Products></Products>
        </div>
    )
}

export default Home
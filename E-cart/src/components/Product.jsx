import React from 'react'
import { items } from './Data'
items

function Product() {
  return (
    <>
    <div className="container my-5">
        <div className="row">
        {
            items.map((Product)=>{
                return(
                    <>
                    <div className="col-lg-4 my-3 text-center">
                    <div className="card" style={{width:'18rem'}}>
  <img src={Product.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Product.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
                    </>
                )
            })
        }
    </div></div>
    </>
  )
}

export default Product

import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="container my-5" style={{ width: "50%" }}>
      {
        cart.length == 0?(
          <>
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to={'/'} className="btn btn-warning">Continue Shopping...</Link>
          </div>
          </>
        ):
      cart.map((product) => {
        return (
          <>
            <div className="card mb-3 my-5" style={{ width: "700px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body test-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <button className="btn btn-primary mx-3">
                      {product.price} ₹
                    </button>
                    <button type="button" className="btn btn-warning">
                      By Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      {
        cart.length!=0 &&(
          <div className="container text-center my-5" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
  
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
          </div>
        )
      }
     
    </div>
  );
};

export default Cart;

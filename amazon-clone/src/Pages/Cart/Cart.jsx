import React from 'react'
import classes from './cart.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import ProductCard from '../../Components/Product/ProductCard'
import {DataProvider} from '../../ContextProvider/ContextProvider'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'


function Cart() {
  const [{basket, user}, dispatch] = React.useContext(DataProvider);
  const total = basket.reduce((amount, item) => amount + item.price, 0);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
     
      <h1>Hello there</h1>
      <h3>Your shopping basket </h3>
      <hr />
      {
        basket?.length == 0 ? <h1>Oops! no item in Your basket</h1> : basket?.map((item, index) =>{
          return <ProductCard
                   key={index}
                   product={item}
                   renderDescription={true} 
                   renderAdd={false}
                   flex={true}
                   
          />
        })
      }
      </div>
      {
        basket?.length != 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal {basket?.length} items</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to='/payments'>Continue to checkout</Link>
          </div>
        )} 
      </section>
    </LayOut>
  )
}

export default Cart

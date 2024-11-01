import React, { useContext, useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './payment.module.css'
import { DataProvider } from '../../ContextProvider/ContextProvider'
import ProductCard from '../../Components/Product/ProductCard';
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

function Payment() {
  const [{user,basket}] = useContext(DataProvider);
  const totalItems = basket?.reduce((amount, item) => {
      return amount + item.amount;
    }, 0);
  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  function handleChange(event) {
    // Create a new PaymentIntent with the card details
    event?.error?.message ? setCardError(event?.error?.message) : setCardError(null);
    
  }
  const total = basket.reduce((amount, item) =>  (item.price * item.amount) + amount, 0);
  return (
    <LayOut>
      {/*  Header  */}
      <div className={classes.payment_header}>Checkout ({totalItems}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Ethiopia, addis</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
             {
               basket?.map((item, index) => <ProductCard
               product={item}
               flex={true}
               key={index}

               />)
             }
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment method</h3>
          <div className={classes.payment_card_container}>
           <div className={classes.payment_detail}>
            <form action="">
              {/* Error */}
              {cardError && <small style={{color:'red'}}>{cardError}</small>}
              {/* Card element */}
              <CardElement onChange={handleChange} />
              {/* Price */}
              <div className={classes.payment_price}>
                <div>
                  <span>
                    Total Order | <CurrencyFormat amount={total}/> 
                  </span>
                </div>
                <button>Pay now</button>
              </div>
            </form>
           </div>
          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Payment

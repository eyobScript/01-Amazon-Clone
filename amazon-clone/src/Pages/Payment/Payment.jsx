import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './payment.module.css'

function Payment() {
  return (
    <LayOut>
      {/*  Header  */}
      <div className={classes.payment_header}>Checkout (2) items</div>
      {/* payment method */}
      <section>
        {/* address */}
        <div></div>
        <hr />
        {/* product */}
        <div></div>
        <hr />
        {/* card form */}
        <div></div>
      </section>
    </LayOut>
  )
}

export default Payment

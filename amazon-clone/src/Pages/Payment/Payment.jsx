import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './payment.module.css'
import { DataProvider } from '../../ContextProvider/ContextProvider'

function Payment() {
  const [{user,basket}] = useContext(DataProvider);
  const totalItems = basket?.reduce((amount, item) => {
      return amount + item.amount;
    }, 0);
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
            <div>{user.email}</div>
            <div>123 React lane</div>
            <div>Ethiopia, addis</div>
          </div>
        </div>
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

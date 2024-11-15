import React, {useContext, useEffect, useState} from 'react'
import LayOut from '../../Components/LayOut/LayOut';
import classes from './order.module.css'
import { db } from '../../Utility/firebase';
import { DataProvider } from '../../ContextProvider/ContextProvider'

function Orders() {

  const [{user}, dispatch] = useContext(DataProvider);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // fetch orders from db
    if(user){
      db.collection('users')
      .doc(user.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot((snapshot) => {
        // console.log(snapshot)
        setOrders(snapshot.docs.map((doc) => doc.data()));
      });
    }else{}
  }, []);
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          <div>

          </div>
        </div>
      </section>
    </LayOut>
  )
}

export default Orders;

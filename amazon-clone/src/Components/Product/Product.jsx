import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './product.module.css'
import Loader from '../Loader/Loader';

function Product() {
    const [Products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);   
      axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);  
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    },[])
  return (
     <>
    {
      loading ? <Loader /> : (<section className={classes.products_container}>
        {
            Products.map((product) => <ProductCard renderAdd={true} key={product.id} product={product}/>)
        }
    </section>)
    }
    </>
  )
}

export default Product

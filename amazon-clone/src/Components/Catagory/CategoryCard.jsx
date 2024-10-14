import React from 'react'
import classes from './category.module.css'
function CategoryCard({category}) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
            <h2>{category.title}</h2>
        </span>
        <img src={category.imageLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard;

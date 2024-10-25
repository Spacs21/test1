import React from 'react'
import "./Category.css"
import apple from "../../assets/Apple.png"
import fitbit from "../../assets/FitBit.png"
import xiaomi from "../../assets/Xiaomi.png"

const category = [
    {
        id: 1,
        image: apple, 
        title: "Apple",
        descp: "Apple is one of the most famous smart watches providing company."
    },
    {
        id: 2,
        image: xiaomi,
        title: "Xiaomi",
        descp: "Xiaomi smart watches are produced by MI company."
    },
    {
        id: 3,
        image: fitbit,
        title: "FitBit",
        descp: "FitBit smart watches are best for there health and fitness features."
    }
]
const Category = () => {
    const data = category.map((category, inx) => (
            <div className="box" key={inx}>
            <img src={category.image}/>
            <div className="box__text">
                <h2>{category.title}</h2>
                <p>{category.descp}</p>
            </div>
            </div>
            ))
  return (
    <article className='category'>
        <div className="container">
            <div className="categories">
                {data}
            </div>
        </div>
    </article>
  )
}

export default Category
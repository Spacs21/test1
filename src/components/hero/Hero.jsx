import React from 'react'
import "./Hero.css"
import watch from "../../assets/watch.png"
import { GoSearch } from "react-icons/go";

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="content">
                <div className="content__text">
                    <h1>Discover Most Suitable Watches</h1>
                    <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <form action="" className='form'>
                        <GoSearch className='search'/>
                        <input type="text" placeholder='Find the best brands'maxLength={25}/>
                        <button>Search</button>
                    </form>
                </div>
                <div className="content__image">
                    <img src={watch} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
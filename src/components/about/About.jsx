import React from 'react'
import "./About.css"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import { IoMdStar } from "react-icons/io";

const About = () => {
  return (
    <aside>
        <div className="container">
            <div className="title">
                <p>Here are our some of the best clients.</p>
                <h2>What People Say About Us</h2>
            </div>
            <div className="about">
                <div className="card">
                    <img src={user1}/>
                    <div className="card__text">
                        <h2>Hamza Faizi</h2>
                        <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                </div>
                <div className="card">
                    <img src={user2}/>
                    <div className="card__text">
                        <h2>Hamza Faizi</h2>
                        <p>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default About
import React from 'react'
import "./Subscribe.css"
import news from "../../assets/news.png"

const Subscribe = () => {
  return (
    <div className="holder">
        <div className="container">
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <h2>Subscribe To Newsletter</h2>
                    <p>Get free guide about smart watches daily.</p>
                    <div className="subscribe-form">
                    <input type="email" placeholder="Enter Email Address" />
                    <button>Subscribe</button>
                    </div>
                </div>
                <div className="watch-image">
                    <img src={news} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
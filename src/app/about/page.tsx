"use client"
import React from 'react'
// import "../../styles/about.css"

const page = () => {
  return (
    <div className="about">
    <div className="card mb-4 text-center bg-transparent border-0 text-light" style={{maxWidth:"650px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="/Asset 2.png" className="img-fluid rounded-start " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">Welcome to our world of celebrations ! We are passionate about creating unforgettable moments.
               Our dedicated team is committed to crafting events that reflect your unique style and create lasting memories in the
                vibrant city of Agadir. we’re here to make it special. Join us in the art of celebration – where every detail matters,
                 and every moment in this city is an opportunity for joy. Welcome to the Yoxo family!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

import React from "react"
import img from '../img.jpg'

const Card = () => {
    return <div className="card">
        <img src={img} alt="" />
        <h1>Card title</h1>
        <p>card text</p>
    </div>
}
export default Card;
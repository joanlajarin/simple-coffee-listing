import React from "react";
import './Coffee.css'
import star from '../../../public/images/Star_fill.svg'

export default function Coffee(props) {
    

    const { coffee } = props 

    return (
        <div key={coffee.id} className="card-coffee">
            {
                coffee.popular && (
                    <div className="tag-popular">Popular</div>
                )
            }
            <img className="img-card-coffee" src={coffee.image}></img>
            <div className="labels-card-coffee">
                <span className="name-card-coffee">{coffee.name}</span>
                <span className="tag-price-card-coffee">{coffee.price}</span>
            </div>
            <div className="more-labels-coffee">
                <img src={star}></img>
                <span className="rating-card-coffee">{coffee.rating}</span>
                <span className="votes-card-coffee">({coffee.votes} votes)</span>
            </div>
        </div>
    )
}
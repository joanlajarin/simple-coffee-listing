import React from "react";
import './CollectionCard.css' 
import vector from '../../../public/images/vector.svg'

export default function CollectionCard() {
    return (
        <div className="card-collection">
            <img className="vector-background" src={vector}></img>
            <h1 className="title-collection">Our Collection</h1>
            <p className="p-collection">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className="btn-collections">
                <button className="btn-collect" id="btn-all-products">All products</button>
                <button className="btn-collect" id="btn-available Now">Available Now</button>
            </div>
        </div>
    )
}
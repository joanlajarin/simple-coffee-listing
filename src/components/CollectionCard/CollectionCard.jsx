import React from "react"
import { useState, useEffect } from "react"
import './CollectionCard.css' 
import vector from '../../../public/images/vector.svg'
import ListOfCoffes from '../ListOfCoffees/ListOfCoffees.jsx'

export default function CollectionCard() {
    
    let [available, setListOption] = useState(false);
    
    function showAvailableListOfCoffees() {
        setListOption(true)
    }
    function showAllOfCoffees() {
        setListOption(false)
    }
    useEffect(() => {
        if (available) {
            console.log("useEffect collectionCard")
        }
      }, [available]);

    return (
        <section className="card-collection">
            <img className="vector-background" src={vector}></img>
            <h1 className="title-collection">Our Collection</h1>
            <p className="p-collection">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div className="btn-collections">
                <button className="btn-collect" id="btn-all-products" onClick={showAllOfCoffees}>All products</button>
                <button className="btn-collect" id="btn-available-now" onClick={showAvailableListOfCoffees}>Available Now</button>
            </div>
            <ListOfCoffes state={available}/>
        </section>
    )
}
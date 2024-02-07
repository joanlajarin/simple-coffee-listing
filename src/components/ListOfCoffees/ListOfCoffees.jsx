import React from "react"
import { useState,useEffect } from "react"
import getCoffes from '../../services/getCoffes'
import Coffee from "../Coffee/Coffee"
import './ListOfCoffees.css'

export default function LisOfCoffes() {

    const coffes = getCoffes()
    
    return(
        <div className="list-of-coffes">
            { coffes ? (
                coffes.map(coffee => <Coffee key={coffee.id} coffee={coffee}/>
            )) : (
                <p>Loading...</p>
              )
            }
        </div>
    )
}
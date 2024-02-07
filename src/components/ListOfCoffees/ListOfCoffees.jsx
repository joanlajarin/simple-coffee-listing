import React from "react"
import { useState,useEffect } from "react"
import getCoffes from '../../services/getCoffes'
import Coffee from "../Coffee/Coffee"

export default function LisOfCoffes() {

    const coffes = getCoffes()
    
    return(
        <div className="list-of-coffes">
            { coffes ? (
                coffes.map(coffee => <Coffee coffee={coffee}/>
            )) : (
                <p>Loading...</p>
              )
            }
        </div>
    )
}
import React from "react"
import getCoffes from '../../services/getCoffes'
import Coffee from "../Coffee/Coffee"
import './ListOfCoffees.css'

export default function ListOfCoffes(available) {

    console.log(available.state)
    const state = available.state
    let coffes
    state == true ? coffes = getCoffes().filter((coffee => coffee.available === true)) 
    : coffes = getCoffes()
    
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
import React from "react"
import { useState,useEffect } from "react"
import getCoffes from '../../services/getCoffes'
import Coffee from "../Coffee/Coffee"

export default function LisOfCoffes() {

    const coffes = getCoffes()

//     let [coffes, setCoffes] = useState([]);
    
//     const apiURLCoffee = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
    
//     useEffect(() => {
//         console.log("useEffect")
//         fetch(apiURLCoffee)
//             .then(response => response.json())
//                 .then(data => { setCoffes(data)})
//                     .catch(error => {
//                         console.log(error)
//         })
//       }, []);
//  //   const coffes = getCoffes()
//     console.log("LisOfCoffes coffes")
//     console.log(coffes)

    return(
        <div className="list-of-coffes">
            { coffes ? (
                coffes.map(coffee => <Coffee data={coffee}/>
            )) : (
                <p>Loading...</p>
              )
            }
        </div>
    )
}
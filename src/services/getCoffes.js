import React from "react"

function getCoffees() {
    const apiURLCoffee = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
    fetch(apiURLCoffee)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

export default getCoffees;
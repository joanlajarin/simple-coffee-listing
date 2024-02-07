import React from "react";

export default function Coffee(props) {
    
    const coffeExample =  {
        "id": 1,
        "name": "Cappuccino",
        "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
        "price": "$5.20",
        "rating": 4.7,
        "votes": 65,
        "popular": true,
        "available": true
    }
    return (
        <div className="cardCoffee">
            <img src={coffeExample.image}></img>
            <span>{coffeExample.name}</span>
        </div>
    )
}
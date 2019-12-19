import React from 'react'
import DogCard from './DogCard'

export default function FavoriteDogs ({favoriteDogs, dogAction}) {

    const dogCards = favoriteDogs.map(dog => {
        return <DogCard 
            dogAction={dogAction}
            key={dog.id}
            dog={dog}
            />
            
    })
    return (
        <div>
         <h1>Favorite Dogs</h1>
         {dogCards}
        </div>
    )
}
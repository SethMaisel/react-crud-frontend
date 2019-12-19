import React from 'react'
import DogCard from './DogCard'

export default function AdoptableDogs({dogs, dogAction}) {
    const dogCards = dogs.map(dog => {
        return <DogCard 
            dogAction={dogAction}
            key={dog.id}
            dog={dog}
            />
    })

    return (
        <div className='adoptableDogs'>
            <h1>Adoptable Dogs</h1>
            {dogCards}
        </div>
    )
}
import React from 'react'

export default function DogCard({dog, dogAction}) {
    const handleClick = () => {
        dogAction(dog)
    }
   return (
       <div className='dog-card' onClick={handleClick}>
           <img src={dog.image} alt={dog.name} />
           <div className='dog-specs'>
               <h4>{dog.name}</h4>
               <p>{dog.breed}</p>
               <p>{dog.age}</p>
           </div>
       </div>
   )
}
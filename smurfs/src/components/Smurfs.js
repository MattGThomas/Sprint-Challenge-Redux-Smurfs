import React from 'react'

export const Smurfs = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <div>
                        <h2>{smurf.name}</h2>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}
import React from 'react'

export const Smurfs = (props) => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                <div>
                    <p>{smurf.name}</p>
                    <p>{smurf.age}</p>
                    <p>{smurf.height}</p>
                    </div>
            })}
        </div>
    )
}
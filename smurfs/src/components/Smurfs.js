import React from 'react'

const Smurfs = (props) => {
    return (
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
        </div>
    )

}
export default Smurfs
import React from 'react'
import Smurfs from './Smurfs'
const SmurfsList = props => {
    console.log(props)
    return (
        <div>
        {props.smurfs.map(smurf => {
            return <Smurfs smurf={smurf} />
        })}
        </div>
    )
}

export default SmurfsList
import React from 'react'
import { connect } from 'react-redux'
import { newSmurf } from '../actions'

class AddSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }
    changeHandler = (evt) => {
        evt.preventDefault()
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    submitHandler = (evt) => {
        evt.preventDefault()
        const newSmurf = this.state
        this.props.newSmurf(newSmurf)
            this.setState({
                name: '',
                age: '',
                height: ''
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='height'
                        value={this.state.height}
                        onChange={this.changeHandler}
                    />
                    <button type='submit'>Add Smurf</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    }
}

export default connect(
    mapStateToProps,
    { 
        newSmurf
    }
)(AddSmurfForm)
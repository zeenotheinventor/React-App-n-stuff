import React, { Component } from 'react';
import { getRandomUser } from './wsao'

class UserDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // name: 'Zino',
            // age: 26,
            // gender: 'prefer not to say'
        }
    }
    componentDidMount() {
        getRandomUser().then(user => {
            console.log(user)
            this.setState({
                name: user.results[0].name.first,
                gender: user.results[0].gender,
                age: user.results[0].dob.age
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                My name is {this.state.name} <br />
                I am {this.state.age} years old! <br />
                I am interested in {this.state.gender} <br />

                My height is {this.props.height}
                {/* {console.log(this.state)} */}
            </div>
        );
    }
}

export default UserDescription;
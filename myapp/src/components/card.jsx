import '../App.css'
import React, { Component } from 'react';

class Card extends Component {
     state = {
        users: []
     }

     componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => {
            console.log(users);
            this.setState({users: users});
        })
     }
    
    render() { 
        return ( 
            <>
            <div className='Container'>
                <h1>Users info</h1>
                <div className='row'>
                    {this.state.users.map(users => (
                        <div key={users.id} className="card">
                            <h3>Name: {users.name}</h3>
                            <p>Phone: {users.phone}</p>
                            <p>Email: {users.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            </>
         );
    }
}
 
export default Card;
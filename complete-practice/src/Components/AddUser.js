import React, { useState } from 'react';
import Card from './Card.js';
import Button from './Button.js';

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        };

        if (+age < 1) {
            return;
        }
        
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    };

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    };

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <h4>Username</h4>
                <input type="text" value={username} onChange={usernameChangeHandler} />
                <h4>Age (Years)</h4>
                <input type="text" value={age} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;

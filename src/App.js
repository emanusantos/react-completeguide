import React, { useState } from 'react';
import AddUser from './Components/AddUser.js';
import ErrorModal from './Components/ErrorModal.js';
import UsersList from './Components/UsersList.js';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div className="App">
        <AddUser onAddUser={addUserHandler} />
        <UsersList users={users} />
    </div>
  );
}

export default App;

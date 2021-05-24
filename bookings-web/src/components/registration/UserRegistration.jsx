import React from 'react';
import PropTypes from 'prop-types';
import classes from '../app/app.css'; 

const UserRegistration = ({ handleSubmit, handleUserNameChange, userName }) => {
  return (
    <div>
    <h1>Register</h1>
    <form className={classes.registrationForm} onSubmit={handleSubmit}>
        <label htmlFor="userName">Username: </label>
        <input type="text" id="userName" value={userName} onChange={handleUserNameChange}/>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password"/>
        <button>Submit</button>
    </form>
    </div>
  );
};

UserRegistration.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default UserRegistration;

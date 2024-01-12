import React, { useState } from 'react';

function UsersPage() {
    const [currentUser, setUser] = useState({
        id: "alskdasdalskdjl",
        firstName: "Firstname",
        lastName: "Lastname",
        address: "Budapest",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={currentUser.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={currentUser.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={currentUser.address}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <button type="submit">Save Changes</button>
            </form>


        <div>

        First Name:{currentUser.firstName} <br />
        Last Name:{currentUser.lastName}<br />
        Address:{currentUser.address}
        </div>

        </div>
    );
}

export default UsersPage;
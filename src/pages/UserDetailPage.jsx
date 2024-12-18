import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById } from '../api';
import Navbar from '../components/Navbar';
import '../styles/UserDetails.css';

const UserDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserById(id).then((response) => setUser(response.data));
    }, [id]);

    if (!user) return <p>Loading...</p>;

    return (
        <>
            <Navbar />
            <div className="user-details">
                {/* Back/Home Button */}
                <div className="back-button-container">
                    <button onClick={() => navigate(-1)} className="back-button">Home</button>
                </div>

                {/* Header Section */}
                <div className="header">
                    <img src={user.image} alt={`${user.firstName}`} className="profile-pic" />
                    <div className="user-info">
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>

                {/* User Details Form */}
                <div className="details-form">
                    <div className="form-group">
                        <label>First Name</label>
                        <div className="field">{user.firstName}</div>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <div className="field">{user.lastName}</div>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <div className="field">{user.gender}</div>
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <div className="field">{user.address.country}</div>
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <div className="field">
                            <div>{user.address.address}</div>
                            <div>{user.address.city}</div>
                            <div>{user.address.state}</div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Job</label>
                        <div className="field">{user.company.title}</div>
                    </div>
                    <div className="form-group">
                        <label>Company</label>
                        <div className="field">{user.company.name}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetailPage;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../api';
import Navbar from '../components/Navbar';
import '../styles/UserList.css';

const UserListPage = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers().then((response) => setUsers(response.data.users));
    }, []);


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);


    const totalPages = Math.ceil(users.length / usersPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleRowClick = (userId) => {
        navigate(`/user/${userId}`);
    };

    return (
        <div>
            <Navbar />
            <div className="user-list">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr key={user.id} onClick={() => handleRowClick(user.id)}>
                                <td className="username-column">
                                    <div className="username">
                                        <img src={user.image} alt={user.firstName} />
                                        <span>{user.firstName} {user.lastName}</span>
                                    </div>
                                </td>
                                <td>{user.gender}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="pagination">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => changePage(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserListPage;

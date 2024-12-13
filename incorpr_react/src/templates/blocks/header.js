import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/header.css';

const Header = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    const [role, setRole] = useState(localStorage.getItem('userRole') || 'NOT');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userId || role === 'NOT') {
            const fetchUserDetails = async () => {
                try {
                    const response = await axios.get('http://localhost:8080/staff/getUserDetails');
                    setUserId(response.data.id);
                    setRole(response.data.role);
                    localStorage.setItem('userId', response.data.id);
                    localStorage.setItem('userRole', response.data.role);
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            };
            fetchUserDetails();
        }
    }, [userId, role]);

    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
        setUserId('');
        setRole('NOT');
        navigate('/auth/sign-in');
    };

    return (
        <div id="header">
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 header-content">
                <div className="logo-nav-header">
                    <h5 id="logo" className="my-0 font-weight-normal mt-2 mt-md-0 logo">
                        <Link to="/">INCORPR</Link>
                    </h5>
                    <nav id="navigation" role="navigation" className="d-inline-flex ms-md-3 nav-menu">
                        <Link to="/" className="me-3 py-2 link-body-emphasis text-decoration-none nav-link">Главная</Link>
                        <Link to="/events" className="me-3 py-2 link-body-emphasis text-decoration-none nav-link">Мероприятия</Link>
                        <Link to="/staff" className="me-3 py-2 link-body-emphasis text-decoration-none nav-link">Пользователи</Link>
                    </nav>
                </div>
                <div className="header-icons">
                    {role === 'NOT' ? (
                        <Link to="/auth/sign-in" id="sign-in" className="me-3 py-2 link-body-emphasis text-decoration-none nav-link sign-in-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-power">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
                                <path d="M12 4l0 8"/>
                            </svg>
                        </Link>
                    ) : (
                        <>
                            <Link to={`/staff/${userId}`} id="profile" className="me-3 py-2 link-body-emphasis text-decoration-none nav-link profile-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                                    <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                                </svg>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;

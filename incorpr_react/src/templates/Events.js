import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/events.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';
import Banner from 'C:/Users/admin/incorpr repository/incorpr_react/src/img/banner.png';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [types, setTypes] = useState([]);
    const [popularEvents, setPopularEvents] = useState([]);
    const [selectedType, setSelectedType] = useState('Все');
    const [currentUserRole, setCurrentUserRole] = useState(localStorage.getItem('userRole'));
    const [error, setError] = useState(null);

    const colors = ['#252525', '#999999', '#999999', '#999999', '#999999'];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/events/all');
                const sortedEvents = response.data.sort((a, b) => b.id - a.id);
                setEvents(sortedEvents);
            } catch (err) {
                setError('Ошибка при загрузке мероприятий. Попробуйте еще раз.');
            }
        };

        const fetchTypes = async () => { 
            try { 
                const response = await axios.get('http://localhost:8080/events/types'); 
                setTypes(['Все', ...response.data]); 
            } catch (err) { 
                setError('Ошибка при загрузке типов мероприятий. Попробуйте еще раз.'); 
            } 
        };

        const fetchPopularEvents = async () => {
            try {
                const response = await axios.get('http://localhost:8080/events/popular');
                setPopularEvents(response.data);
            } catch (err) {
                setError('Ошибка при загрузке популярных мероприятий. Попробуйте еще раз.');
            }
        };

        fetchEvents();
        fetchTypes();
        fetchPopularEvents();
    }, []);

    const selectMenuItem = (selectedItem) => {
        setSelectedType(selectedItem);
    };

    const filteredEvents = selectedType === 'Все' ? events : events.filter(event => event.type === selectedType);

    return (
        <div className="body">
            <Header />
            <main className="container-events">
                <div className="main-content-events">
                    <h1>Мероприятия</h1>
                    <div>
                        <img className="banner-events" src={Banner} alt="banner" />
                    </div>
                    <div className="section-events">
                        <div className="head-events">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 21.0769C4.70791 21.0769 0 16.369 0 10.5769C0 4.78481 4.70791 0.0769043 10.5 0.0769043C16.2921 0.0769043 21 4.78481 21 10.5769C21 16.369 16.2921 21.0769 10.5 21.0769ZM10.5 1.54202C5.5186 1.54202 1.46512 5.59551 1.46512 10.5769C1.46512 15.5583 5.5186 19.6118 10.5 19.6118C15.4814 19.6118 19.5349 15.5583 19.5349 10.5769C19.5349 5.59551 15.4814 1.54202 10.5 1.54202Z" fill="white"/>
                                <path d="M14.1234 14.4155C13.9965 14.4155 13.8695 14.3862 13.7523 14.308L10.7244 12.5011C9.97227 12.0518 9.41553 11.0652 9.41553 10.1959V6.1913C9.41553 5.79083 9.74762 5.45874 10.1481 5.45874C10.5486 5.45874 10.8806 5.79083 10.8806 6.1913V10.1959C10.8806 10.5476 11.1737 11.0652 11.4765 11.2411L14.5044 13.048C14.856 13.2531 14.9634 13.7025 14.7583 14.0541C14.6118 14.2885 14.3676 14.4155 14.1234 14.4155Z" fill="white"/>
                            </svg>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.38895 9.40188H2.93772C2.15859 9.40188 1.41137 9.09239 0.860438 8.54149C0.309509 7.99059 0 7.24341 0 6.46432V3.01446C0 2.23537 0.309509 1.48819 0.860438 0.937294C1.41137 0.386396 2.15859 0.0769043 2.93772 0.0769043H6.38895C7.16809 0.0769043 7.91531 0.386396 8.46624 0.937294C9.01717 1.48819 9.32668 2.23537 9.32668 3.01446V6.46432C9.32668 7.24341 9.01717 7.99059 8.46624 8.54149C7.91531 9.09239 7.16809 9.40188 6.38895 9.40188ZM2.93772 1.25193C2.47024 1.25193 2.02191 1.43762 1.69135 1.76816C1.36079 2.0987 1.17509 2.54701 1.17509 3.01446V6.46432C1.17509 6.93178 1.36079 7.38009 1.69135 7.71062C2.02191 8.04116 2.47024 8.22686 2.93772 8.22686H6.38895C6.85643 8.22686 7.30477 8.04116 7.63532 7.71062C7.96588 7.38009 8.15159 6.93178 8.15159 6.46432V3.01446C8.15159 2.54701 7.96588 2.0987 7.63532 1.76816C7.30477 1.43762 6.85643 1.25193 6.38895 1.25193H2.93772ZM18.0646 9.40188H14.6146C13.8354 9.40188 13.0882 9.09239 12.5373 8.54149C11.9864 7.99059 11.6769 7.24341 11.6769 6.46432V3.01446C11.6769 2.23537 11.9864 1.48819 12.5373 0.937294C13.0882 0.386396 13.8354 0.0769043 14.6146 0.0769043H18.0623C18.4481 0.0769043 18.8301 0.152886 19.1865 0.300512C19.5429 0.448138 19.8668 0.664517 20.1396 0.937294C20.4124 1.21007 20.6287 1.53391 20.7764 1.89031C20.924 2.24671 21 2.62869 21 3.01446V6.46432C21 7.24301 20.6908 7.98983 20.1404 8.54066C19.59 9.09149 18.8434 9.40126 18.0646 9.40188ZM14.6146 1.25193C14.1471 1.25193 13.6988 1.43762 13.3682 1.76816C13.0376 2.0987 12.8519 2.54701 12.8519 3.01446V6.46432C12.8519 6.93178 13.0376 7.38009 13.3682 7.71062C13.6988 8.04116 14.1471 8.22686 14.6146 8.22686H18.0623C18.5298 8.22686 18.9781 8.04116 19.3086 7.71062C19.6392 7.38009 19.8249 6.93178 19.8249 6.46432V3.01446C19.8249 2.54701 19.6392 2.0987 19.3086 1.76816C18.9781 1.43762 18.5298 1.25193 18.0623 1.25193H14.6146ZM6.38895 21.0769H2.9389C2.15976 21.0769 1.41254 20.7674 0.861613 20.2165C0.310684 19.6656 0.001175 18.9184 0.001175 18.1393V14.6895C0.001175 13.9104 0.310684 13.1632 0.861613 12.6123C1.41254 12.0614 2.15976 11.7519 2.9389 11.7519H6.38895C7.16809 11.7519 7.91531 12.0614 8.46624 12.6123C9.01717 13.1632 9.32668 13.9104 9.32668 14.6895V18.1393C9.32668 18.9184 9.01717 19.6656 8.46624 20.2165C7.91531 20.7674 7.16809 21.0769 6.38895 21.0769ZM2.9389 12.9269C2.47142 12.9269 2.02308 13.1126 1.69253 13.4432C1.36197 13.7737 1.17626 14.222 1.17626 14.6895V18.1393C1.17626 18.6068 1.36197 19.0551 1.69253 19.3856C2.02308 19.7162 2.47142 19.9019 2.9389 19.9019H6.38895C6.85643 19.9019 7.30477 19.7162 7.63532 19.3856C7.96588 19.0551 8.15159 18.6068 8.15159 18.1393V14.6895C8.15159 14.222 7.96588 13.7737 7.63532 13.4432C7.30477 13.1126 6.85643 12.9269 6.38895 12.9269H2.9389ZM18.0646 21.0769H14.6146C13.8354 21.0769 13.0882 20.7674 12.5373 20.2165C11.9864 19.6656 11.6769 18.9184 11.6769 18.1393V14.6895C11.6769 13.9104 11.9864 13.1632 12.5373 12.6123C13.0882 12.0614 13.8354 11.7519 14.6146 11.7519H18.0623C18.4481 11.7519 18.8301 11.8279 19.1865 11.9755C19.5429 12.1232 19.8668 12.3395 20.1396 12.6123C20.4124 12.8851 20.6287 13.2089 20.7764 13.5653C20.924 13.9217 21 14.3037 21 14.6895V18.1393C21 18.918 20.6908 19.6649 20.1404 20.2157C19.59 20.7665 18.8434 21.0763 18.0646 21.0769ZM14.6146 12.9269C14.1471 12.9269 13.6988 13.1126 13.3682 13.4432C13.0376 13.7737 12.8519 14.222 12.8519 14.6895V18.1393C12.8519 18.6068 13.0376 19.0551 13.3682 19.3856C13.6988 19.7162 14.1471 19.9019 14.6146 19.9019H18.0623C18.5298 19.9019 18.9781 19.7162 19.3086 19.3856C19.6392 19.0551 19.8249 18.6068 19.8249 18.1393V14.6895C19.8249 14.222 19.6392 13.7737 19.3086 13.4432C18.9781 13.1126 18.5298 12.9269 18.0623 12.9269H14.6146Z" fill="white"/>
                            </svg>
                        </div>
                        {filteredEvents.map(event => (
                            <Link to={`/events/${event.id}`} className="black-events" key={event.id}>
                                <div className="event-events">
                                    <p className="date-events">{new Date(event.date_time).toLocaleDateString()}</p>
                                    <p>{event.title}</p>
                                    <p className="type-events">{event.type}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {currentUserRole === 'ADMIN' && (
                        <div className="add-btn-events">
                            <Link to="/events/add" className="abtn centered-text-btn-events">Добавить</Link>
                        </div>
                    )}
                </div>
                <aside className="sidebar-events">
                    <div className="filter-section-events">
                        <div className="sidebar-head-events">
                            <h2>Тип</h2>
                        </div>
                        <div className="filter-container-events"> 
                            {types.map(type => ( 
                                <div className="row-events" key={type}> 
                                    <p className={`type-filter-events ${selectedType === type ? 'active-events' : ''}`} onClick={() => selectMenuItem(type)}>{type}</p>    
                                </div> 
                            ))} 
                        </div>
                    </div>
                    <div className="sidebar-section-events">
                        <div className="sidebar-head-events">
                            <h2>Популярное</h2>
                        </div>
                        {popularEvents.map((event, index) => (
                            <Link to={`/events/${event.id}`} className="black-events" key={event.id}>
                                <div className={`event-events ${index % 2 === 0 ? 'even-events' : 'odd-events'}`}>
                                <svg className="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                    <rect y="0.983032" width="21" height="21" rx="10.5" fill={colors[index % colors.length]} /> 
                                    <text x="10.5" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="Gugi" fontWeight="thin">{index + 1}</text> 
                                </svg>
                                    <p className="sidebar-p-events">{event.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </main>
            <Footer />
        </div>
    );
};

export default Events;

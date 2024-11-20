import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/main.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';
import Banner from 'C:/Users/admin/incorpr repository/incorpr_react/src/img/banner.png';

const Index = () => {
    
    const [webinars, setWebinars] = useState([]);
    const [hackathons, setHackathons] = useState([]);
    const [conferences, setConferences] = useState([]);
    const [staff, setStaff] = useState([]);
    const [error, setError] = useState(null);

    const colors = ['#252525', '#999999', '#999999', '#999999', '#999999'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const webinarsResponse = await axios.get('http://localhost:8080/webinars');
                console.log("Webinars: ", webinarsResponse.data);
                setWebinars(webinarsResponse.data);
    
                const hackathonsResponse = await axios.get('http://localhost:8080/hackathons');
                console.log("Hackathons: ", hackathonsResponse.data);
                setHackathons(hackathonsResponse.data);
    
                const conferencesResponse = await axios.get('http://localhost:8080/conferences');
                console.log("Conferences: ", conferencesResponse.data);
                setConferences(conferencesResponse.data);
    
                const staffResponse = await axios.get('http://localhost:8080/staff');
                console.log("Staff: ", staffResponse.data);
                setStaff(staffResponse.data);
            } catch (err) {
                console.error("Error fetching data: ", err);
                setError('Ошибка при загрузке данных. Попробуйте еще раз.');
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <div className="body">
            <Header />
            <main>
                <div>
                    <img className="banner" src={Banner} alt="banner"/>
                </div>
                <div className="sections">
                    <div className="section">
                        <div className="head">
                            <h2>Вебинары</h2>
                            <Link to="/events/all" className="more"><h2>Ещё ❯</h2></Link>
                        </div>
                        {webinars.map((webinar, index) => (
                            <Link to={`/events/${webinar.id}`} className="black-events" key={webinar.id}>
                                <div className={`event-events ${index % 2 === 0 ? 'even-events' : 'odd-events'}`}>
                                    <svg className="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.983032" width="21" height="21" rx="10.5" fill={colors[index % colors.length]} />
                                        <text x="10.5" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="Gugi" fontWeight="thin">{index + 1}</text>
                                    </svg>
                                    <p className="sidebar-p-events">{webinar.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="section">
                        <div className="head">
                            <h2>Хакатоны</h2>
                            <Link to="/events/all" className="more"><h2>Ещё ❯</h2></Link>
                        </div>
                        {hackathons.map((hackathon, index) => (
                            <Link to={`/events/${hackathon.id}`} className="black-events" key={hackathon.id}>
                                <div className={`event-events ${index % 2 === 0 ? 'even-events' : 'odd-events'}`}>
                                    <svg className="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.983032" width="21" height="21" rx="10.5" fill={colors[index % colors.length]} />
                                        <text x="10.5" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="Gugi" fontWeight="thin">{index + 1}</text>
                                    </svg>
                                    <p className="sidebar-p-events">{hackathon.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="section">
                        <div className="head">
                            <h2>IT-конференции</h2>
                            <Link to="/events/all" className="more"><h2>Ещё ❯</h2></Link>
                        </div>
                        {conferences.map((conference, index) => (
                            <Link to={`/events/${conference.id}`} className="black-events" key={conference.id}>
                                <div className={`event-events ${index % 2 === 0 ? 'even-events' : 'odd-events'}`}>
                                    <svg className="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.983032" width="21" height="21" rx="10.5" fill={colors[index % colors.length]} />
                                        <text x="10.5" y="16" textAnchor="middle" fill="white" fontSize="10" fontFamily="Gugi" fontWeight="thin">{index + 1}</text>
                                    </svg>
                                    <p className="sidebar-p-events">{conference.title}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="section">
                        <div className="head">
                            <h2>Сотрудники</h2>
                            <Link to="/staff/all" className="more"><h2>Ещё ❯</h2></Link>
                        </div>
                        <div className="avatars">
                            {staff.map((employee) => (
                                <Link to={`/staff/${employee.id}`} key={employee.id}>
                                    <img className="avatar" src={`http://localhost:8080${employee.avatarUrl}`} alt={`avatar of ${employee.username}`}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Index;

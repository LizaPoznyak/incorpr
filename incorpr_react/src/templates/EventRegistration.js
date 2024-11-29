import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/staff.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EventRegistration = () => {
    const { id } = useParams();
    const [participants, setParticipants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/events/${id}/users`);
                setParticipants(response.data);
            } catch (err) {
                setError('Ошибка при загрузке данных участников.');
            }
        };

        fetchParticipants();
    }, [id]);

    return (
        <div className="body-staff">
            <Header />
            <main className="container-staff">
                <div className="main-content-staff">
                    <h2>Участники TechQuest: Новые горизонты киберпространства</h2>
                    <div className="head-staff">
                        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.72 24.9212H3.125C2.2962 24.9212 1.50134 24.592 0.915291 24.0059C0.32924 23.4199 0 22.625 0 21.7962V20.7625C0 15.8012 4.45125 11.7625 9.9225 11.7625C15.3938 11.7625 19.845 15.7987 19.845 20.7625V21.7962C19.845 22.625 19.5158 23.4199 18.9297 24.0059C18.3437 24.592 17.5488 24.9212 16.72 24.9212ZM9.9225 13.015C5.14 13.015 1.25 16.49 1.25 20.765V21.7987C1.25 22.296 1.44754 22.7729 1.79918 23.1246C2.15081 23.4762 2.62772 23.6737 3.125 23.6737H16.72C17.2173 23.6737 17.6942 23.4762 18.0458 23.1246C18.3975 22.7729 18.595 22.296 18.595 21.7987V20.7625C18.595 16.49 14.705 13.015 9.9225 13.015ZM9.9225 9.88874C8.95233 9.88899 8.00388 9.60152 7.19709 9.0627C6.3903 8.52389 5.76142 7.75792 5.38998 6.86167C5.01854 5.96542 4.92123 4.97915 5.11035 4.02759C5.29947 3.07603 5.76652 2.20192 6.45245 1.51582C7.13838 0.829719 8.01236 0.362439 8.96387 0.173077C9.91538 -0.0162846 10.9017 0.0807777 11.798 0.451989C12.6944 0.8232 13.4605 1.45189 13.9995 2.25854C14.5385 3.06519 14.8263 4.01357 14.8263 4.98374C14.8253 6.2841 14.3083 7.53094 13.389 8.45056C12.4696 9.37017 11.2229 9.88741 9.9225 9.88874ZM9.9225 1.32999C9.1995 1.32974 8.49267 1.54392 7.89142 1.94545C7.29017 2.34697 6.8215 2.91779 6.54471 3.5857C6.26792 4.25362 6.19543 4.98862 6.33642 5.69774C6.47741 6.40685 6.82554 7.05823 7.33678 7.56946C7.84801 8.0807 8.49939 8.42883 9.2085 8.56982C9.91762 8.71081 10.6526 8.63832 11.3205 8.36153C11.9885 8.08473 12.5593 7.61607 12.9608 7.01482C13.3623 6.41356 13.5765 5.70674 13.5763 4.98374C13.5753 4.01501 13.19 3.08624 12.505 2.40124C11.82 1.71625 10.8912 1.33098 9.9225 1.32999Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="section-staff">
                        {error ? (
                            <p>{error}</p>
                        ) : (
                            participants.map((participant) => (
                                <div className="employee-staff" key={participant.id}>
                                    <Link to={'/staff/${participant.id}'} className="link-staff">
                                        <div className="employee-info-staff">
                                            <img className="avatar-staff" src={`http://localhost:8080${participant.avatar_url}`} alt={`avatar of ${participant.username}`} onError={(e) => e.target.src = 'http://localhost:8080/uploads/avatars/default%20avatar.jpg'} />
                                            <p className="username-staff">{participant.username}</p>
                                            <p className="position-staff">{participant.position}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EventRegistration;
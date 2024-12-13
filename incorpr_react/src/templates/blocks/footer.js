import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/footer.css';

const Footer = () => {

    return (

        <div>
            <footer class="text-body-secondary">
                <div class="footer">
                    <div class="navigation-panel">
                        <div class="main-page"><Link to="/" class="home">Главная</Link></div>
                        <div class="it-events"><Link to="/events" class="events">Мероприятия</Link></div>
                        <div class="staff"><Link to="/staff" class="employees">Пользователи</Link></div>
                    </div>
                    <div class="copyright">
                        <div class="copyright-text">
                            <span class="copyright-4a">Copyright </span>
                            <span class="copyright-symbol">ⓒ</span>
                            <span class="all-rights-reserved">INCORPR. Все права защищены</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );

};

export default Footer;

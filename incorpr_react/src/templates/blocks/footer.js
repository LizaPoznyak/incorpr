import React, { useState } from 'react';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/footer.css';

const Footer = () => {

    return (

        <div>
            <footer class="text-body-secondary">
                <div class="footer">
                    <div class="navigation-panel">
                        <div class="main-page"><a href="/" class="home">Главная</a></div>
                        <div class="it-events"><a href="/events/all" class="events">Мероприятия</a></div>
                        <div class="staff"><a href="/staff/all" class="employees">Сотрудники</a></div>
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

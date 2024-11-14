import React, { useState } from 'react';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/header.css';

const Header = () => {

    return (

        <div id="header">
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 header-content">
                <h5 id="logo" class="my-0 font-weight-normal mt-2 mt-md-0 logo"><a href="/">INCORPR</a></h5>
                <nav id="navigation" role="navigation" class="d-inline-flex ms-md-3 nav-menu">
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none nav-link" href="/">Главная</a>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none nav-link" href="/events/all">Мероприятия</a>
                    <a class="me-3 py-2 link-body-emphasis text-decoration-none nav-link" href="/staff/all">Сотрудники</a>
                </nav>
                <a id="sign-in" class="me-3 py-2 link-body-emphasis text-decoration-none nav-link sign-in-icon" href="/sign-in">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-power">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
                        <path d="M12 4l0 8"/>
                    </svg>
                </a>
                <a id="profile" class="me-3 py-2 link-body-emphasis text-decoration-none nav-link profile-icon" href="/staff/45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-user">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                        <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                    </svg>
                </a>
            </div>
        </div>

    );

};

export default Header;

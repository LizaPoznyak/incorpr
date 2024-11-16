import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/events.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';
import Banner from 'C:/Users/admin/incorpr repository/incorpr_react/src/img/banner.png';

const Events = () => {
    const selectMenuItem = (selectedItem) => {
        const items = document.querySelectorAll('.type-filter-events');
        items.forEach(item => {
            item.classList.remove('active-events');
        });
        selectedItem.classList.add('active-events');
    };    

    return (
        <div class="body">
            <Header />
            <main className="container-events">
                <div className="main-content-events">
                    <h1>Мероприятия</h1>
                    <div>
                        <img className="banner-events" src={Banner} alt="banner"/>
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
                        <Link to="/events/id" className="black-events">
                            <div className="event-events">
                                <p className="date-events">21.10.24</p>
                                <p>TechQuest: Новые горизонты киберпространства</p>
                                <p className="type-events">Хакатон</p>
                            </div>
                        </Link>
                        <Link to="/events/id" className="black-events">
                            <div className="event-events">
                                <p className="date-events">19.10.24</p>
                                <p>Кибербезопасность: Защита данных в цифровую эпоху</p>
                                <p className="type-events">Вебинар</p>
                            </div>
                        </Link>
                        <Link to="/events/id" className="black-events">
                            <div className="event-events">
                                <p className="date-events">18.10.24</p>
                                <p>Блокчейн и криптовалюты: Что нужно знать сегодня</p>
                                <p className="type-events">Вебинар</p>
                            </div>
                        </Link>
                        <Link to="/events/id" className="black-events">
                            <div className="event-events">
                                <p className="date-events">12.10.24</p>
                                <p>CodeSprint: Битва умов</p>
                                <p className="type-events">Хакатон</p>
                            </div>
                        </Link>
                        <Link to="/events/id" className="black-events">
                            <div className="event-events">
                                <p className="date-events">07.10.24</p>
                                <p>TechConverge: Преображение информационных технологий</p>
                                <p className="type-events">IT-конференция</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">05.10.24</p>
                                <p>DigitalForge: Создавая будущее</p>
                                <p className="type-events">Хакатон</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">04.10.24</p>
                                <p>Веб-разработка: Современные технологии и практики</p>
                                <p className="type-events">Вебинар</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">28.09.24</p>
                                <p>InnovateIT: Технологические открытия и тренды</p>
                                <p className="type-events">IT-конференция</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">27.09.24</p>
                                <p>Клауд-технологии: Облако для бизнеса и личных нужд</p>
                                <p className="type-events">Вебинар</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">20.09.24</p>
                                <p>ByteBlitz: Инновации без границ</p>
                                <p className="type-events">Хакатон</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">14.09.24</p>
                                <p>FutureNet: Эволюция цифровых решений</p>
                                <p className="type-events">IT-конференция</p>
                            </div>
                            <div className="event-events">
                                <p className="date-events">13.09.24</p>
                                <p>SmartWorld: Интеллектуальные системы и новые технологии</p>
                                <p className="type-events">IT-конференция</p>
                            </div>
                        </Link>
                    </div>
                    <div className="add-btn-events"> 
                        <Link to="/events/add" className="abtn centered-text-btn-events">Добавить</Link>
                    </div> 
                </div> 
                <aside className="sidebar-events"> 
                    <div className="filter-section-events"> 
                        <div className="sidebar-head-events"> 
                            <h2>Тип</h2> 
                        </div> 
                        <div className="filter-container-events"> 
                            <div className="row-events"> 
                                <p className="type-filter-events active-events" onClick={(e) => selectMenuItem(e.target)}>Все</p> 
                                <p className="type-filter-events" onClick={(e) => selectMenuItem(e.target)}>Хакатон</p> 
                            </div> 
                            <div className="row-events"> 
                                <p className="type-filter-events" onClick={(e) => selectMenuItem(e.target)}>IT-конференция</p> 
                                <p className="type-filter-events" onClick={(e) => selectMenuItem(e.target)}>Вебинар</p> 
                            </div> 
                        </div>
                    </div> 
                    <div className="sidebar-section-events"> 
                        <div className="sidebar-head-events">
                            <h2>Популярное</h2> 
                        </div> 
                        <Link to="/events/id" className="black-events"> 
                            <div className="odd-events"> 
                                <svg class="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.983032" width="21" height="21" rx="10.5" fill="#252525"/>
                                    <g filter="url(#filter0_d_168_161)">
                                        <path d="M10.2905 14.983V8.95129L8.68994 9.95032V8.94592C9.09456 8.74182 9.52425 8.46073 9.979 8.10266C10.4373 7.74459 10.7918 7.40442 11.0425 7.08215H11.3647V14.983H10.2905Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_168_161" x="3.68994" y="2.08215" width="12.6748" height="17.9009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset/>
                                            <feGaussianBlur stdDeviation="2.5"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_168_161"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_168_161" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <p className="sidebar-p-events">Кибербезопасность: Защита данных в цифровую эпоху</p> 
                            </div> 
                        </Link> 
                        <Link to="/events/id" className="black-events"> 
                            <div className="even-events"> 
                                <svg class="sidebar-svg" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                    <path d="M7.98633 14.983V14.7682L10.4517 10.9923C10.9673 10.201 11.2251 9.52958 11.2251 8.97815C11.2251 8.25126 10.8151 7.88782 9.99512 7.88782C9.70508 7.88782 9.43294 7.9648 9.17871 8.11877C8.92448 8.26917 8.74007 8.46073 8.62549 8.69348L7.93262 8.12415C8.05436 7.77323 8.29248 7.49394 8.64697 7.28625C9.00505 7.07857 9.43652 6.97473 9.94141 6.97473C10.6969 6.97473 11.2878 7.15019 11.7139 7.5011C12.14 7.84843 12.353 8.34078 12.353 8.97815C12.353 9.56897 12.0701 10.3138 11.5044 11.2125L9.7373 14.0162H12.8203V14.983H7.98633Z" fill="white"/>
                                </svg>
                                <p className="sidebar-p-events">Блокчейн и криптовалюты: Что нужно знать сегодня</p> 
                            </div> 
                        </Link> 
                        <Link to="/events/id" className="black-events"> 
                            <div className="odd-events"> 
                                <svg class="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                    <path d="M8.20117 14.4244L8.7168 13.5973C9.06771 13.984 9.51172 14.1774 10.0488 14.1774C11.0443 14.1774 11.542 13.6904 11.542 12.7164C11.542 12.2724 11.397 11.9126 11.1069 11.6368C10.8169 11.3575 10.432 11.2179 9.95215 11.2179H9.86621V10.3478H9.91455C10.8241 10.3478 11.2788 9.94674 11.2788 9.14465C11.2788 8.30676 10.8509 7.88782 9.99512 7.88782C9.52962 7.88782 9.15902 8.04358 8.8833 8.3551L8.40527 7.62463C8.73828 7.19137 9.29508 6.97473 10.0757 6.97473C10.7632 6.97473 11.3236 7.15914 11.7568 7.52795C12.1901 7.89319 12.4067 8.36226 12.4067 8.93518C12.4067 9.37203 12.285 9.75875 12.0415 10.0953C11.8016 10.4319 11.5187 10.6575 11.1929 10.7721C11.644 10.9189 12.0021 11.1696 12.2671 11.524C12.5356 11.875 12.6699 12.3011 12.6699 12.8024C12.6699 13.5328 12.439 14.0968 11.9771 14.4943C11.5151 14.8917 10.867 15.0905 10.0327 15.0905C9.6818 15.0905 9.33805 15.026 9.00146 14.8971C8.66488 14.7646 8.39811 14.6071 8.20117 14.4244Z" fill="white"/>
                                </svg>
                                <p className="sidebar-p-events">Веб-разработка: Современные технологии и практики</p> 
                            </div> 
                        </Link> 
                        <Link to="/events/id" className="black-events"> 
                            <div className="even-events"> 
                                <svg class="sidebar-svg-events" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                    <path d="M12.353 12.84V14.983H11.3325V12.84H7.75V12.2277L11.9771 7.08215H12.353V12.0128H13.1479V12.84H12.353ZM11.3325 9.22522L9.02295 12.0128H11.3325V9.22522Z" fill="white"/>
                                </svg>
                                <p className="sidebar-p-events">Клауд-технологии: Облако для бизнеса и личных нужд</p> 
                            </div> 
                        </Link> 
                    </div> 
                </aside> 
            </main> 
            <Footer /> 
        </div> 
    ); 
}; 

export default Events

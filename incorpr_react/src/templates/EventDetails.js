import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/event-details.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EventDetails = () => {
    return (
        <div class="body">
            <Header />
            <main className="container-event-details">
                <div className="main-content-event-details">
                    <h2>Мероприятия</h2>
                    <div className="head-event-details">
                        <h2 className="top5-event-details">TechQuest: Новые горизонты киберпространства</h2>
                    </div>
                    <div className="section-event-details">
                        <div className="type-event-details">
                            <div className="event-info-event-details">
                                <h2 className="username-event-details top5-event-details">Хакатон</h2>
                                <h2 className="date-event-details top5-event-details">21.10.24 13:30</h2>
                            </div>
                        </div>
                        <div className="description-event-details top5-event-details">
                            <p>
                                Хакатон TechQuest: Новые горизонты киберпространства - это уникальная возможность для разработчиков,
                                инженеров и технологов собраться и создать инновационные решения, которые смогут изменить мир. В рамках
                                этого события, участники будут соревноваться в создании программного обеспечения, разработке новых
                                технологий и решений в области кибербезопасности, искусственного интеллекта и интернета вещей. Главная
                                цель хакатона — открыть новые горизонты в сфере IT и продемонстрировать мощь коллективного интеллекта и
                                инноваций. Присоединяйтесь к нам и станьте частью будущего технологий!
                            </p>
                        </div>
                    </div>
                    <div className="action-event-details">
                        <div>
                            <Link to="/events/id" className="abtn centered-text-btn-event-details">Зарегистрироваться</Link>
                        </div>
                        <div className="icons-event-details">
                            <Link to="/events/id/edit">
                                <svg className="edit-icon-event-details" width="30" height="30" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.18915 26.5001H25.7366C25.9293 26.5001 26.114 26.4234 26.2502 26.2867C26.3864 26.1501 26.4629 25.9648 26.4629 25.7715C26.4629 25.5783 26.3864 25.393 26.2502 25.2563C26.114 25.1197 25.9293 25.0429 25.7366 25.0429H1.18915C0.996532 25.0429 0.811806 25.1197 0.675606 25.2563C0.539407 25.393 0.462891 25.5783 0.462891 25.7715C0.462891 25.9648 0.539407 26.1501 0.675606 26.2867C0.811806 26.4234 0.996532 26.5001 1.18915 26.5001ZM10.1395 21.0239C10.7528 20.8509 11.3124 20.5251 11.7664 20.0767L25.6233 6.17492C26.0979 5.69697 26.3643 5.04986 26.3643 4.37527C26.3643 3.70067 26.0979 3.05356 25.6233 2.57561L24.258 1.2204C23.7745 0.758043 23.1321 0.500122 22.4641 0.500122C21.7961 0.500122 21.1538 0.758043 20.6703 1.2204L6.81328 15.1076C6.36644 15.5607 6.0459 16.1235 5.88367 16.7397L4.80881 20.7616C4.75828 20.9454 4.75719 21.1393 4.80567 21.3236C4.85415 21.5079 4.95046 21.676 5.08479 21.8108C5.29064 22.0132 5.56642 22.128 5.85462 22.1314L10.1395 21.0239ZM10.7351 19.0421C10.4672 19.3155 10.1311 19.5118 9.76188 19.6104L8.35295 19.9893L6.90043 18.5321L7.27809 17.1186C7.37837 16.749 7.57373 16.4123 7.84457 16.1423L8.39652 15.6031L11.287 18.5029L10.7351 19.0421ZM12.3183 17.4683L9.42781 14.5685L19.2032 4.76143L22.0937 7.66128L12.3183 17.4683ZM24.5921 5.15488L23.125 6.62666L20.2345 3.72681L21.7016 2.24045C21.9058 2.03578 22.1827 1.92083 22.4714 1.92083C22.7601 1.92083 23.037 2.03578 23.2412 2.24045L24.5921 3.61023C24.7947 3.8159 24.9083 4.0934 24.9083 4.38255C24.9083 4.67171 24.7947 4.94921 24.5921 5.15488Z" fill="#252525"/>
                                </svg>
                            </Link>
                            <Link to="/events">
                                <svg className="delete-icon-event-details" width="35" height="37" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3546 6.24422H19.9554V5.59839C19.9554 5.08453 19.7513 4.59172 19.3879 4.22837C19.0246 3.86502 18.5317 3.66089 18.0179 3.66089H13.4454C12.9315 3.66089 12.4387 3.86502 12.0754 4.22837C11.712 4.59172 11.5079 5.08453 11.5079 5.59839V6.24422H6.10872C5.93744 6.24422 5.77317 6.31226 5.65205 6.43338C5.53093 6.5545 5.46289 6.71877 5.46289 6.89006C5.46289 7.06134 5.53093 7.22561 5.65205 7.34673C5.77317 7.46785 5.93744 7.53589 6.10872 7.53589H7.03872L7.58122 26.2005C7.60249 27.0419 7.95235 27.8415 8.5559 28.4282C9.15946 29.0148 9.96871 29.3419 10.8104 29.3392H20.6529C21.4946 29.3419 22.3038 29.0148 22.9074 28.4282C23.5109 27.8415 23.8608 27.0419 23.8821 26.2005L24.4246 7.53589H25.3546C25.5258 7.53589 25.6901 7.46785 25.8112 7.34673C25.9323 7.22561 26.0004 7.06134 26.0004 6.89006C26.0004 6.71877 25.9323 6.5545 25.8112 6.43338C25.6901 6.31226 25.5258 6.24422 25.3546 6.24422ZM12.7996 5.59839C12.7996 5.4271 12.8676 5.26283 12.9887 5.14172C13.1098 5.0206 13.2741 4.95256 13.4454 4.95256H18.0179C18.1892 4.95256 18.3534 5.0206 18.4746 5.14172C18.5957 5.26283 18.6637 5.4271 18.6637 5.59839V6.24422H12.7996V5.59839ZM22.5904 26.1617C22.5769 26.6666 22.3669 27.1462 22.005 27.4985C21.6431 27.8507 21.1579 28.0477 20.6529 28.0476H10.8104C10.3054 28.0477 9.82022 27.8507 9.45832 27.4985C9.09642 27.1462 8.88636 26.6666 8.87289 26.1617L8.31747 7.53589H23.1458L22.5904 26.1617Z" fill="#252525"/>
                                <path d="M11.0498 11.3333C11.0498 11.162 11.1178 10.9978 11.239 10.8767C11.3601 10.7555 11.5244 10.6875 11.6956 10.6875C11.8669 10.6875 12.0312 10.7555 12.1523 10.8767C12.2734 10.9978 12.3415 11.162 12.3415 11.3333L12.6644 24.25C12.6644 24.4213 12.5963 24.5856 12.4752 24.7067C12.3541 24.8278 12.1898 24.8958 12.0186 24.8958C11.8473 24.8958 11.683 24.8278 11.5619 24.7067C11.4408 24.5856 11.3727 24.4213 11.3727 24.25L11.0498 11.3333ZM20.4144 11.3424C20.4144 11.1711 20.3463 11.0068 20.2252 10.8857C20.1041 10.7646 19.9398 10.6965 19.7686 10.6965C19.5973 10.6965 19.433 10.7646 19.3119 10.8857C19.1908 11.0068 19.1227 11.1711 19.1227 11.3424L18.7998 24.259C18.7998 24.4303 18.8678 24.5946 18.989 24.7157C19.1101 24.8368 19.2744 24.9049 19.4456 24.9049C19.6169 24.9049 19.7812 24.8368 19.9023 24.7157C20.0234 24.5946 20.0915 24.4303 20.0915 24.259L20.4144 11.3424Z" fill="#252525"/>
                                </svg>
                            </Link>
                            <Link to="/events/id/users">
                                <svg className="users-icon-event-details" width="28" height="30" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_253_203)">
                                    <path d="M2.75 3.58911C2.75 2.72716 3.09241 1.90051 3.7019 1.29101C4.3114 0.681521 5.13805 0.339111 6 0.339111L19 0.339111C19.862 0.339111 20.6886 0.681521 21.2981 1.29101C21.9076 1.90051 22.25 2.72716 22.25 3.58911V23.0891C22.25 23.9511 21.9076 24.7777 21.2981 25.3872C20.6886 25.9967 19.862 26.3391 19 26.3391H6C5.13805 26.3391 4.3114 25.9967 3.7019 25.3872C3.09241 24.7777 2.75 23.9511 2.75 23.0891V3.58911ZM19 1.96411H6C5.56902 1.96411 5.1557 2.13532 4.85095 2.44006C4.5462 2.74481 4.375 3.15813 4.375 3.58911V23.0891C4.375 23.5201 4.5462 23.9334 4.85095 24.2382C5.1557 24.5429 5.56902 24.7141 6 24.7141H19C19.431 24.7141 19.8443 24.5429 20.149 24.2382C20.4538 23.9334 20.625 23.5201 20.625 23.0891V3.58911C20.625 3.15813 20.4538 2.74481 20.149 2.44006C19.8443 2.13532 19.431 1.96411 19 1.96411Z" fill="#252525"/>
                                    <path d="M7.83929 6.5C7.61669 6.5 7.40322 6.59783 7.24582 6.77197C7.08842 6.94611 7 7.1823 7 7.42857C7 7.67484 7.08842 7.91103 7.24582 8.08517C7.40322 8.25931 7.61669 8.35714 7.83929 8.35714H17.9107C18.1333 8.35714 18.3468 8.25931 18.5042 8.08517C18.6616 7.91103 18.75 7.67484 18.75 7.42857C18.75 7.1823 18.6616 6.94611 18.5042 6.77197C18.3468 6.59783 18.1333 6.5 17.9107 6.5H7.83929ZM7 11.1429C7 10.8966 7.08842 10.6604 7.24582 10.4863C7.40322 10.3121 7.61669 10.2143 7.83929 10.2143H17.9107C18.1333 10.2143 18.3468 10.3121 18.5042 10.4863C18.6616 10.6604 18.75 10.8966 18.75 11.1429C18.75 11.3891 18.6616 11.6253 18.5042 11.7995C18.3468 11.9736 18.1333 12.0714 17.9107 12.0714H7.83929C7.61669 12.0714 7.40322 11.9736 7.24582 11.7995C7.08842 11.6253 7 11.3891 7 11.1429ZM7.83929 13.9286C7.61669 13.9286 7.40322 14.0264 7.24582 14.2005C7.08842 14.3747 7 14.6109 7 14.8571C7 15.1034 7.08842 15.3396 7.24582 15.5137C7.40322 15.6879 7.61669 15.7857 7.83929 15.7857H17.9107C18.1333 15.7857 18.3468 15.6879 18.5042 15.5137C18.6616 15.3396 18.75 15.1034 18.75 14.8571C18.75 14.6109 18.6616 14.3747 18.5042 14.2005C18.3468 14.0264 18.1333 13.9286 17.9107 13.9286H7.83929ZM7.83929 17.6429C7.61669 17.6429 7.40322 17.7407 7.24582 17.9148C7.08842 18.089 7 18.3252 7 18.5714C7 18.8177 7.08842 19.0539 7.24582 19.228C7.40322 19.4022 7.61669 19.5 7.83929 19.5H12.875C13.0976 19.5 13.3111 19.4022 13.4685 19.228C13.6259 19.0539 13.7143 18.8177 13.7143 18.5714C13.7143 18.3252 13.6259 18.089 13.4685 17.9148C13.3111 17.7407 13.0976 17.6429 12.875 17.6429H7.83929Z" fill="#252525"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_253_203">
                                            <rect width="23.5" height="26" fill="white" transform="translate(0.75 0.339111)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                            <Link to="/events/id">
                                <svg className="pdf-icon-event-details" width="26" height="30" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_253_206)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 7.65161V23.0891C23 23.9511 22.6576 24.7777 22.0481 25.3872C21.4386 25.9967 20.612 26.3391 19.75 26.3391H18.125V24.7141H19.75C20.181 24.7141 20.5943 24.5429 20.899 24.2382C21.2038 23.9334 21.375 23.5201 21.375 23.0891V7.65161H18.125C17.4785 7.65161 16.8585 7.3948 16.4014 6.93768C15.9443 6.48056 15.6875 5.86058 15.6875 5.21411V1.96411H6.75C6.31902 1.96411 5.9057 2.13532 5.60095 2.44006C5.2962 2.74481 5.125 3.15813 5.125 3.58911V18.2141H3.5V3.58911C3.5 2.72716 3.84241 1.90051 4.4519 1.29101C5.0614 0.681521 5.88805 0.339111 6.75 0.339111L15.6875 0.339111L23 7.65161ZM2.85 19.5954H0.25V26.0937H1.53537V23.913H2.84025C3.30608 23.913 3.70258 23.8193 4.02975 23.6319C4.36017 23.4423 4.61096 23.1855 4.78212 22.8616C4.96053 22.5228 5.05052 22.1444 5.04375 21.7615C5.04375 21.3552 4.95817 20.9885 4.787 20.6614C4.61553 20.3379 4.35648 20.0693 4.0395 19.8862C3.7145 19.6912 3.318 19.5943 2.85 19.5954ZM3.73563 21.7615C3.74114 21.9756 3.6937 22.1877 3.5975 22.379C3.51124 22.5457 3.37637 22.6823 3.21075 22.7706C3.02145 22.8638 2.8123 22.9096 2.60138 22.9039H1.5305V20.6191H2.603C2.95725 20.6191 3.23458 20.7172 3.435 20.9132C3.63542 21.1115 3.73563 21.3942 3.73563 21.7615ZM5.71325 19.5954V26.0937H8.08575C8.73792 26.0937 9.2785 25.9654 9.7075 25.7086C10.1416 25.4489 10.4806 25.0563 10.6744 24.589C10.8867 24.1015 10.9929 23.5143 10.9929 22.8275C10.9929 22.145 10.8867 21.5627 10.6744 21.0806C10.4825 20.6189 10.1469 20.2314 9.71725 19.9756C9.28825 19.7221 8.74388 19.5954 8.08413 19.5954H5.71325ZM6.99862 20.6435H7.9135C8.31542 20.6435 8.64529 20.7258 8.90312 20.8905C9.17048 21.0668 9.37257 21.326 9.47837 21.6282C9.60621 21.9554 9.67013 22.3633 9.67013 22.8519C9.67516 23.176 9.63802 23.4993 9.55963 23.8139C9.50357 24.0625 9.39497 24.2964 9.24113 24.4996C9.09974 24.6818 8.91241 24.8232 8.69837 24.9091C8.44756 25.0029 8.18121 25.0481 7.9135 25.0424H6.99862V20.6435ZM13.081 23.5084V26.0937H11.7972V19.5954H15.9378V20.6565H13.081V22.4716H15.6908V23.5084H13.081Z" fill="#252525"/>
                                    </g> 
                                    <defs>
                                        <clipPath id="clip0_253_206">
                                            <rect width="22.75" height="26" fill="white" transform="translate(0.25 0.339111)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EventDetails;

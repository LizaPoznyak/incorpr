import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/main.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const Index = () => {

    return (
        <div>
            <Header />
            <main>
                <div>
                    <img class="banner" src="C:\Users\admin\incorpr repository\incorpr_react\src\img\banner.png" alt="banner"/>
                </div>
                <div class="sections">
                    <div class="section">
                        <div class="head">
                            <h2>Вебинары</h2>
                            <a href="/events/all" class="more"><h2>Ещё</h2></a>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <p>Кибербезопасность: Защита данных в цифровую эпоху</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M7.98633 14.983V14.7682L10.4517 10.9923C10.9673 10.201 11.2251 9.52958 11.2251 8.97815C11.2251 8.25126 10.8151 7.88782 9.99512 7.88782C9.70508 7.88782 9.43294 7.9648 9.17871 8.11877C8.92448 8.26917 8.74007 8.46073 8.62549 8.69348L7.93262 8.12415C8.05436 7.77323 8.29248 7.49394 8.64697 7.28625C9.00505 7.07857 9.43652 6.97473 9.94141 6.97473C10.6969 6.97473 11.2878 7.15019 11.7139 7.5011C12.14 7.84843 12.353 8.34078 12.353 8.97815C12.353 9.56897 12.0701 10.3138 11.5044 11.2125L9.7373 14.0162H12.8203V14.983H7.98633Z" fill="white"/>
                            </svg>
                            <p>Блокчейн и криптовалюты: Что нужно знать сегодня</p>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M8.20117 14.4244L8.7168 13.5973C9.06771 13.984 9.51172 14.1774 10.0488 14.1774C11.0443 14.1774 11.542 13.6904 11.542 12.7164C11.542 12.2724 11.397 11.9126 11.1069 11.6368C10.8169 11.3575 10.432 11.2179 9.95215 11.2179H9.86621V10.3478H9.91455C10.8241 10.3478 11.2788 9.94674 11.2788 9.14465C11.2788 8.30676 10.8509 7.88782 9.99512 7.88782C9.52962 7.88782 9.15902 8.04358 8.8833 8.3551L8.40527 7.62463C8.73828 7.19137 9.29508 6.97473 10.0757 6.97473C10.7632 6.97473 11.3236 7.15914 11.7568 7.52795C12.1901 7.89319 12.4067 8.36226 12.4067 8.93518C12.4067 9.37203 12.285 9.75875 12.0415 10.0953C11.8016 10.4319 11.5187 10.6575 11.1929 10.7721C11.644 10.9189 12.0021 11.1696 12.2671 11.524C12.5356 11.875 12.6699 12.3011 12.6699 12.8024C12.6699 13.5328 12.439 14.0968 11.9771 14.4943C11.5151 14.8917 10.867 15.0905 10.0327 15.0905C9.6818 15.0905 9.33805 15.026 9.00146 14.8971C8.66488 14.7646 8.39811 14.6071 8.20117 14.4244Z" fill="white"/>
                            </svg>
                            <p>Веб-разработка: Современные технологии и практики</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M12.353 12.84V14.983H11.3325V12.84H7.75V12.2277L11.9771 7.08215H12.353V12.0128H13.1479V12.84H12.353ZM11.3325 9.22522L9.02295 12.0128H11.3325V9.22522Z" fill="white"/>
                            </svg>
                            <p>Клауд-технологии: Облако для бизнеса и личных нужд</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="head">
                            <h2>Хакатоны</h2>
                            <a href="/events/all" class="more"><h2>Ещё</h2></a>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <p>TechQuest: Новые горизонты киберпространства</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M7.98633 14.983V14.7682L10.4517 10.9923C10.9673 10.201 11.2251 9.52958 11.2251 8.97815C11.2251 8.25126 10.8151 7.88782 9.99512 7.88782C9.70508 7.88782 9.43294 7.9648 9.17871 8.11877C8.92448 8.26917 8.74007 8.46073 8.62549 8.69348L7.93262 8.12415C8.05436 7.77323 8.29248 7.49394 8.64697 7.28625C9.00505 7.07857 9.43652 6.97473 9.94141 6.97473C10.6969 6.97473 11.2878 7.15019 11.7139 7.5011C12.14 7.84843 12.353 8.34078 12.353 8.97815C12.353 9.56897 12.0701 10.3138 11.5044 11.2125L9.7373 14.0162H12.8203V14.983H7.98633Z" fill="white"/>
                            </svg>
                            <p>CodeSprint: Битва умов</p>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M8.20117 14.4244L8.7168 13.5973C9.06771 13.984 9.51172 14.1774 10.0488 14.1774C11.0443 14.1774 11.542 13.6904 11.542 12.7164C11.542 12.2724 11.397 11.9126 11.1069 11.6368C10.8169 11.3575 10.432 11.2179 9.95215 11.2179H9.86621V10.3478H9.91455C10.8241 10.3478 11.2788 9.94674 11.2788 9.14465C11.2788 8.30676 10.8509 7.88782 9.99512 7.88782C9.52962 7.88782 9.15902 8.04358 8.8833 8.3551L8.40527 7.62463C8.73828 7.19137 9.29508 6.97473 10.0757 6.97473C10.7632 6.97473 11.3236 7.15914 11.7568 7.52795C12.1901 7.89319 12.4067 8.36226 12.4067 8.93518C12.4067 9.37203 12.285 9.75875 12.0415 10.0953C11.8016 10.4319 11.5187 10.6575 11.1929 10.7721C11.644 10.9189 12.0021 11.1696 12.2671 11.524C12.5356 11.875 12.6699 12.3011 12.6699 12.8024C12.6699 13.5328 12.439 14.0968 11.9771 14.4943C11.5151 14.8917 10.867 15.0905 10.0327 15.0905C9.6818 15.0905 9.33805 15.026 9.00146 14.8971C8.66488 14.7646 8.39811 14.6071 8.20117 14.4244Z" fill="white"/>
                            </svg>
                            <p>DigitalForge: Создавая будущее</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M12.353 12.84V14.983H11.3325V12.84H7.75V12.2277L11.9771 7.08215H12.353V12.0128H13.1479V12.84H12.353ZM11.3325 9.22522L9.02295 12.0128H11.3325V9.22522Z" fill="white"/>
                            </svg>
                            <p>ByteBlitz: Инновации без границ</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="head">
                            <h2>IT-конференции</h2>
                            <a href="/events/all" class="more"><h2>Ещё</h2></a>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <p>TechConverge: Преображение информационных технологий</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M7.98633 14.983V14.7682L10.4517 10.9923C10.9673 10.201 11.2251 9.52958 11.2251 8.97815C11.2251 8.25126 10.8151 7.88782 9.99512 7.88782C9.70508 7.88782 9.43294 7.9648 9.17871 8.11877C8.92448 8.26917 8.74007 8.46073 8.62549 8.69348L7.93262 8.12415C8.05436 7.77323 8.29248 7.49394 8.64697 7.28625C9.00505 7.07857 9.43652 6.97473 9.94141 6.97473C10.6969 6.97473 11.2878 7.15019 11.7139 7.5011C12.14 7.84843 12.353 8.34078 12.353 8.97815C12.353 9.56897 12.0701 10.3138 11.5044 11.2125L9.7373 14.0162H12.8203V14.983H7.98633Z" fill="white"/>
                            </svg>
                            <p>InnovateIT: Технологические открытия и тренды</p>
                        </div>
                        <div class="odd">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M8.20117 14.4244L8.7168 13.5973C9.06771 13.984 9.51172 14.1774 10.0488 14.1774C11.0443 14.1774 11.542 13.6904 11.542 12.7164C11.542 12.2724 11.397 11.9126 11.1069 11.6368C10.8169 11.3575 10.432 11.2179 9.95215 11.2179H9.86621V10.3478H9.91455C10.8241 10.3478 11.2788 9.94674 11.2788 9.14465C11.2788 8.30676 10.8509 7.88782 9.99512 7.88782C9.52962 7.88782 9.15902 8.04358 8.8833 8.3551L8.40527 7.62463C8.73828 7.19137 9.29508 6.97473 10.0757 6.97473C10.7632 6.97473 11.3236 7.15914 11.7568 7.52795C12.1901 7.89319 12.4067 8.36226 12.4067 8.93518C12.4067 9.37203 12.285 9.75875 12.0415 10.0953C11.8016 10.4319 11.5187 10.6575 11.1929 10.7721C11.644 10.9189 12.0021 11.1696 12.2671 11.524C12.5356 11.875 12.6699 12.3011 12.6699 12.8024C12.6699 13.5328 12.439 14.0968 11.9771 14.4943C11.5151 14.8917 10.867 15.0905 10.0327 15.0905C9.6818 15.0905 9.33805 15.026 9.00146 14.8971C8.66488 14.7646 8.39811 14.6071 8.20117 14.4244Z" fill="white"/>
                            </svg>
                            <p>FutureNet: Эволюция цифровых решений</p>
                        </div>
                        <div class="even">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.983032" width="21" height="21" rx="10.5" fill="#999999"/>
                                <path d="M12.353 12.84V14.983H11.3325V12.84H7.75V12.2277L11.9771 7.08215H12.353V12.0128H13.1479V12.84H12.353ZM11.3325 9.22522L9.02295 12.0128H11.3325V9.22522Z" fill="white"/>
                            </svg>
                            <p>SmartWorld: Интеллектуальные системы и новые технологии</p>
                        </div>
                    </div>
                    <div class="section">
                        <div class="head">
                            <h2>Сотрудники</h2>
                            <a href="/staff/all" class="more"><h2>Ещё</h2></a>
                        </div>
                        <div class="avatars">
                            <a href="/staff/45"><img class="avatar" src="C:\Users\admin\incorpr repository\incorpr_react\src\img\avatar 1.png" alt="avatar 1"/></a>
                            <a href="/staff/15"><img class="avatar" src="C:\Users\admin\incorpr repository\incorpr_react\src\img\avatar 2.png" alt="avatar 2"/></a>
                            <a href="/staff/42"><img class="avatar" src="C:\Users\admin\incorpr repository\incorpr_react\src\img\avatar 3.png" alt="avatar 3"/></a>
                            <a href="/staff/14"><img class="avatar" src="C:\Users\admin\incorpr repository\incorpr_react\src\img\avatar 4.png" alt="avatar 4"/></a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Index;

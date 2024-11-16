import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/sign-up.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';
import Avatar from 'C:/Users/admin/incorpr repository/incorpr_react/src/img/default avatar.jpg';

const SignUp = () => {

    useEffect(() => {
        document.getElementById('avatar-preview-sign-up').onclick = function() {
            document.getElementById('avatar-input-sign-up').click();
        };
        document.getElementById('avatar-input-sign-up').onchange = function(event) {
            var reader = new FileReader();
            reader.onload = function() {
                document.getElementById('avatar-preview-sign-up').src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        };
    }, []);

    return (
        <div>
            <Header />
            <main className="main-container-sign-up">
                <div className="head-sign-up">
                    <h1>Регистрация</h1>
                </div>
                <form className="form" action="/sign-up" method="post" encType="multipart/form-data">
                    <div className="form-sign-up">
                        <div className="avatar-container-sign-up">
                            <div className="avatar-sign-up">
                                <label>
                                    <img id="avatar-preview-sign-up" src={Avatar} alt="avatar"/>
                                    <div className="plus-icon-sign-up">+</div>
                                    <input type="file" id="avatar-input-sign-up" name="avatar" accept="image/*"/>
                                </label>
                            </div>
                        </div>
                        <div className="text-info-sign-up">
                            <label>
                                Логин
                                <input type="text" name="username" className="form-control-sign-up" required/>
                            </label>
                            <label>
                                Пароль
                                <input type="password" name="password" className="form-control-sign-up" required/>
                            </label>
                            <label>
                                Подтвердить пароль
                                <input type="password" name="confirm password" className="form-control-sign-up" required/>
                            </label>
                            <label>
                                Должность
                                <input type="text" name="position" className="form-control-sign-up" required/>
                            </label>
                        </div>
                    </div>
                    <div className="button-sign-up">
                        <Link to="/sign-in" className="abtn btn-custom-sign-up">Зарегистрироваться</Link>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default SignUp;

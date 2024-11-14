import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/sign-up.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const SignUp = () => {

    useEffect(() => {
        document.getElementById('avatar-preview').onclick = function() {
            document.getElementById('avatar-input').click();
        };
        document.getElementById('avatar-input').onchange = function(event) {
            var reader = new FileReader();
            reader.onload = function() {
                document.getElementById('avatar-preview').src = reader.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        };
    }, []);

    return (
        <div>
            <Header />
            <main>
                <div className="head">
                    <h1>Регистрация</h1>
                </div>
                <form action="/sign-up" method="post" enctype="multipart/form-data">
                    <div className="form">
                        <div className="avatar-container">
                            <div className="avatar">
                                <label>
                                    <img id="avatar-preview" src="./img/default avatar.jpg" alt="avatar"/>
                                    <div className="plus-icon">+</div>
                                    <input type="file" id="avatar-input" name="avatar" accept="image/*"/>
                                </label>
                            </div>
                        </div>
                        <div className="text-info">
                            <label>
                                Логин
                                <input type="text" name="username" className="form-control" required/>
                            </label>
                            <label>
                                Пароль
                                <input type="password" name="password" className="form-control" required/>
                            </label>
                            <label>
                                Подтвердить пароль
                                <input type="password" name="confirm password" className="form-control" required/>
                            </label>
                            <label>
                                Должность
                                <input type="text" name="position" className="form-control" required/>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit" className="abtn btn-custom">Зарегистрироваться</button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default SignUp;

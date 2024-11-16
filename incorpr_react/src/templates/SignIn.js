import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/sign-in.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const SignIn = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container-sign-in">
                    <h2>Войти</h2>
                    <form className="form-sign-in" action="/sign-in" method="post">
                        <div className="mb-3-sign-in">
                            <label>
                                <input type="text" name="username" placeholder="Логин" className="form-control-sign-in" required/>
                            </label>
                        </div>
                        <div className="mb-3-sign-in">
                            <label>
                                <input type="password" name="password" placeholder="Пароль" className="form-control-sign-in" required/>
                            </label>
                        </div>
                        <Link to="/" className="abtn btn-custom-sign-in">Войти</Link>
                    </form>
                    <div className="mt-3-sign-in link-sign-in">
                        <Link to="/sign-up" className="sign-up-link-sign-in">Зарегистрироваться</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;

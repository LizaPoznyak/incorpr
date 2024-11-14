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
                <div className="container">
                    <div className="main-container">
                        <h2>Войти</h2>
                        <form action="/sign-in" method="post">
                            <div className="mb-3">
                                <label>
                                    <input type="text" name="username" placeholder="Логин" className="form-control" required/>
                                </label>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <input type="password" name="password" placeholder="Пароль" className="form-control" required/>
                                </label>
                            </div>
                            <button type="submit" className="abtn btn-custom">Войти</button>
                        </form>
                        <div className="mt-3 link">
                            <Link to="/sign-up" className="sign-up-link">Зарегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;

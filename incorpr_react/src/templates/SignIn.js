import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/sign-in.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/sign-in', { username, password });
            setMessage(response.data.message);
            if (response.data.userId) {
                navigate('/');
            }
        } catch (error) {
            setMessage('Login failed');
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className="container-sign-in">
                    <h2>Войти</h2>
                    <form className="form-sign-in" onSubmit={handleSubmit}>
                        <div className="mb-3-sign-in">
                            <label>
                                <input type="text" name="username" placeholder="Логин" className="form-control-sign-in" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                        </div>
                        <div className="mb-3-sign-in">
                            <label>
                                <input type="password" name="password" placeholder="Пароль" className="form-control-sign-in" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <button type="submit" className="abtn btn-custom-sign-in">Войти</button>
                    </form>
                    <div className="mt-3-sign-in link-sign-in">
                        <Link to="/sign-up" className="sign-up-link-sign-in">Зарегистрироваться</Link>
                    </div>
                    {message && <p>{message}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SignIn;

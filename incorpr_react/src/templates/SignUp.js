import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/sign-up.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';
import Avatar from 'C:/Users/admin/incorpr repository/incorpr_react/src/img/default avatar.jpg';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [position, setPosition] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('confirmPassword', confirmPassword);
        formData.append('position', position);
        formData.append('avatar', avatar);
        try {
            const response = await axios.post('http://localhost:8080/sign-up', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            setMessage(response.data.message);
            if (response.status === 201) {
                navigate('/sign-in');
            }
        } catch (error) {
            setMessage('Registration failed');
        }
    };

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
                <form className="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="form-sign-up">
                        <div className="avatar-container-sign-up">
                            <div className="avatar-sign-up">
                                <label>
                                    <img id="avatar-preview-sign-up" src={Avatar} alt="avatar" />
                                    <div className="plus-icon-sign-up">+</div>
                                    <input type="file" id="avatar-input-sign-up" name="avatar" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
                                </label>
                            </div>
                        </div>
                        <div className="text-info-sign-up">
                            <label>
                                Логин
                                <input type="text" name="username" className="form-control-sign-up" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            <label>
                                Пароль
                                <input type="password" name="password" className="form-control-sign-up" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <label>
                                Подтвердить пароль
                                <input type="password" name="confirmPassword" className="form-control-sign-up" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            </label>
                            <label>
                                Должность
                                <input type="text" name="position" className="form-control-sign-up" required value={position} onChange={(e) => setPosition(e.target.value)} />
                            </label>
                        </div>
                    </div>
                    <div className="button-sign-up">
                        <button type="submit" className="abtn btn-custom-sign-up">Зарегистрироваться</button>
                    </div>
                </form>
                {message && <p>{message}</p>}
            </main>
            <Footer />
        </div>
    );
};

export default SignUp;

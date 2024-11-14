import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/edit-profile.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EditProfile = () => {
    const [username, setUsername] = useState('TechGuru42');
    const [position, setPosition] = useState('Главный технический директор');
    const [avatar, setAvatar] = useState('C:/Users/admin/incorpr repository/incorpr_react/src/img/avatar 1.png');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('position', position);
        if (file) {
            formData.append('avatar', file);
        }
        
        try {
            await axios.post('/api/sign-up', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Redirect to profile page or show success message
        } catch (err) {
            setError('Ошибка при обновлении профиля. Попробуйте еще раз.');
        }
    };

    return (
        <div>
            <Header />
            <main>
                <div className="head">
                    <h2>Профиль</h2>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="profile-container">
                        <div className="avatar-container">
                            <div className="avatar">
                                <label>
                                    <img id="avatar-preview" src={avatar} alt="avatar" onClick={() => document.getElementById('avatar-input').click()} />
                                    <div className="plus-icon">+</div>
                                    <input type="file" id="avatar-input" name="avatar" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                                </label>
                            </div>
                        </div>
                        <div className="text-info-fields">
                            <label>
                                Логин
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    value={username}
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                            <label>
                                Должность
                                <input
                                    type="text"
                                    name="position"
                                    className="form-control"
                                    value={position}
                                    required
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="abtn centered-text-btn">Сохранить</button>
                    </div>
                </form>
                {error && <p>{error}</p>}
            </main>
            <Footer />
        </div>
    );
};

export default EditProfile;

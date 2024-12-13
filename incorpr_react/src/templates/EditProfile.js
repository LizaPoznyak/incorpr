import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/edit-profile.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EditProfile = () => {
    const { id } = useParams();
    const [username, setUsername] = useState('');
    const [position, setPosition] = useState('');
    const [avatar, setAvatar] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/staff/${id}/edit`);
                const userData = response.data;
                setUsername(userData.username);
                setPosition(userData.position);
                setAvatar(`http://localhost:8080${userData.avatar_url}`);
            } catch (err) {
                setError('Ошибка при загрузке данных пользователя');
            }
        };
        fetchUserData();
    }, [id]);

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
        const user = { username, position };
        formData.append('user', new Blob([JSON.stringify(user)], { type: 'application/json' }));
        if (file) {
            formData.append('avatar', file);
        }

        try {
            const response = await axios.post(`http://localhost:8080/staff/${id}/edit`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                navigate(`/staff/${id}`);
            }
        } catch (err) {
            setError('Ошибка при обновлении профиля. Попробуйте еще раз.');
        }
    };

    return (
        <div className="body">
            <Header />
            <main className="main-container-edit-profile">
                <div className="head-edit-profile">
                    <h2>Профиль</h2>
                </div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="profile-container-edit-profile">
                        <div className="avatar-container-edit-profile">
                            <div className="avatar-edit-profile">
                                <label>
                                    <img id="avatar-preview-edit-profile" src={avatar} alt="avatar" onClick={() => document.getElementById('avatar-input').click()} />
                                    <div className="plus-icon-edit-profile">+</div>
                                    <input type="file" id="avatar-input" name="avatar" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                                </label>
                            </div>
                        </div>
                        <div className="text-info-fields-edit-profile">
                            <label>
                                Логин
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control-edit-profile"
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
                                    className="form-control-edit-profile"
                                    value={position}
                                    required
                                    onChange={(e) => setPosition(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="abtn centered-text-btn-edit-profile">Сохранить</button>
                </form>
                {error && <p>{error}</p>}
            </main>
            <Footer />
        </div>
    );
};

export default EditProfile;

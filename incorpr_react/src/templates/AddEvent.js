import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/add-event.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [types, setTypes] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/events/types');
                setTypes(response.data);
            } catch (err) {
                setError('Ошибка при загрузке типов мероприятий. Попробуйте еще раз.');
            }
        };

        fetchTypes();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/events/add', { title, description, type, dateTime }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 201) {
                navigate('/events');
            }
        } catch (err) {
            setError('Ошибка при добавлении мероприятия. Попробуйте еще раз.');
        }
    };

    return (
        <div className="body">
            <Header />
            <main className="container-add-event">
                <div className="main-content-add-event">
                    <h2>Мероприятия</h2>
                    <div className="head-add-event">
                        <h2>Добавить</h2>
                    </div>
                    <form className="form-add-event" onSubmit={handleSubmit}>
                        <div className="input-add-event">
                            <label className="label-add-event">
                                Название
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control-add-event"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label className="label-add-event">
                                Описание
                                <textarea
                                    name="description"
                                    className="form-control-add-event description-add-event"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </label>
                            <fieldset>
                                <legend>Тип мероприятия</legend>
                                <div className="radio-group-add-event">
                                    {types.map((eventType) => (
                                        <label key={eventType} className="radio-add-event">
                                            <input
                                                type="radio"
                                                name="type"
                                                value={eventType}
                                                required
                                                checked={type === eventType}
                                                onChange={(e) => setType(e.target.value)}
                                            /> {eventType}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                            <label className="label-add-event">
                                Дата и время
                                <input
                                    type="datetime-local"
                                    name="dateTime"
                                    className="form-control-add-event datetime-add-event"
                                    required
                                    value={dateTime}
                                    onChange={(e) => setDateTime(e.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit" className="abtn centered-text-btn-add-event">Сохранить</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AddEvent;

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/add-event.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const AddEvent = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events/add', { title, description, type, date });
        } catch (err) {
            setError('Ошибка при добавлении мероприятия. Попробуйте еще раз.');
        }
    };

    return (
        <div>
            <Header />
            <main className="container">
                <div className="main-content">
                    <h2>Мероприятия</h2>
                    <div className="head">
                        <h2>Добавить</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="input">
                            <label>
                                Название
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label>
                                Описание
                                <textarea
                                    name="description"
                                    className="form-control"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </label>
                            <fieldset>
                                <legend>Тип мероприятия</legend>
                                <div className="radio-group">
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="Хакатон"
                                            required
                                            checked={type === 'Хакатон'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> Хакатон
                                    </label>
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="IT-конференция"
                                            required
                                            checked={type === 'IT-конференция'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> IT-конференция
                                    </label>
                                    <label className="radio">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="Вебинар"
                                            required
                                            checked={type === 'Вебинар'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> Вебинар
                                    </label>
                                </div>
                            </fieldset>
                            <label>
                                Дата и время
                                <input
                                    type="datetime-local"
                                    name="date"
                                    className="form-control datetime"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit" className="abtn centered-text-btn">Сохранить</button>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AddEvent;

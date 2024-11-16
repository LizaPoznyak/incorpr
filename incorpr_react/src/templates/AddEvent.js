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
            await axios.post('/events/add', { title, description, type, date });
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
                                    <label className="radio-add-event">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="Хакатон"
                                            required
                                            checked={type === 'Хакатон'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> Хакатон
                                    </label>
                                    <label className="radio-add-event">
                                        <input
                                            type="radio"
                                            name="type"
                                            value="IT-конференция"
                                            required
                                            checked={type === 'IT-конференция'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> IT-конференция
                                    </label>
                                    <label className="radio-add-event">
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
                            <label className="label-add-event">
                                Дата и время
                                <input
                                    type="datetime-local"
                                    name="date"
                                    className="form-control-add-event datetime-add-event"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </label>
                        </div>
                        <Link to="/events" className="abtn centered-text-btn-add-event">Сохранить</Link>
                    </form>
                    {error && <p>{error}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AddEvent;

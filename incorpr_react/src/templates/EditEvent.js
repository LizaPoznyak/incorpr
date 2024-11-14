import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/edit-event.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EditEvent = () => {
    const [title, setTitle] = useState('TechQuest: Новые горизонты киберпространства');
    const [description, setDescription] = useState('Хакатон TechQuest: Новые горизонты киберпространства - это уникальная возможность для разработчиков, инженеров и технологов собраться и создать инновационные решения, которые смогут изменить мир. В рамках этого события, участники будут соревноваться в создании программного обеспечения, разработке новых технологий и решений в области кибербезопасности, искусственного интеллекта и интернета вещей. Главная цель хакатона — открыть новые горизонты в сфере IT и продемонстрировать мощь коллективного интеллекта и инноваций. Присоединяйтесь к нам и станьте частью будущего технологий!');
    const [type, setType] = useState('Хакатон');
    const [date, setDate] = useState('2024-10-21T13:30');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/events/edit', { title, description, type, date });
            // Redirect to events page or show success message
        } catch (err) {
            setError('Ошибка при редактировании мероприятия. Попробуйте еще раз.');
        }
    };

    return (
        <div>
            <Header />
            <main className="container">
                <div className="main-content">
                    <h2>Мероприятия</h2>
                    <div className="head">
                        <h2>Редактировать</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
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
                                    style={{ height: '185px' }}
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
                                    style={{ width: '220px' }}
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

export default EditEvent;

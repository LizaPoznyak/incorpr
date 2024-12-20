import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/edit-event.css';
import 'C:/Users/admin/incorpr repository/incorpr_react/src/static/index.css';
import Header from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/header';
import Footer from 'C:/Users/admin/incorpr repository/incorpr_react/src/templates/blocks/footer';

const EditEvent = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [date_time, setDateTime] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/events/${id}/edit`);
                const eventData = response.data;
                setTitle(eventData.title);
                setDescription(eventData.description);
                setType(eventData.type);
                setDateTime(eventData.date_time);
            } catch (err) {
                setError('Ошибка при загрузке данных мероприятия. Попробуйте еще раз.');
            }
        };

        fetchEventData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/events/${id}/edit`, { title, description, type, date_time: date_time });
            if (response.status === 200) {
                navigate(`/events/${id}`);
            }
        } catch (err) {
            setError('Ошибка при редактировании мероприятия. Попробуйте еще раз.');
        }
    };

    return (
        <div className="body">
            <Header />
            <main className="container-add-event">
                <div className="main-content-add-event">
                    <h2>Мероприятия</h2>
                    <div className="head-add-event">
                        <h2>Редактировать</h2>
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
                                            value="Конференция"
                                            required
                                            checked={type === 'Конференция'}
                                            onChange={(e) => setType(e.target.value)}
                                        /> Конференция
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
                                    name="date_time"
                                    className="form-control-add-event datetime-add-event"
                                    required
                                    value={date_time}
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

export default EditEvent;

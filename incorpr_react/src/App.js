import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEvent from './templates/AddEvent';
import EditEvent from './templates/EditEvent';
import EditProfile from './templates/EditProfile';
import EventDetails from './templates/EventDetails';
import EventRegistration from './templates/EventRegistration';
import Events from './templates/Events';
import Index from './templates/Index';
import Profile from './templates/Profile';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import Staff from './templates/Staff';

function App() {
    return (
        <Router> 
            <Routes> 
                <Route path="/" element={<Index />} /> 
                <Route path="/sign-up" element={<SignUp />} /> 
                <Route path="/profile/:id" element={<Profile />} /> 
                <Route path="/staff" element={<Staff />} /> 
                <Route path="/events" element={<Events />} /> 
                <Route path="/add-event" element={<AddEvent />} /> 
                <Route path="/edit-event/:id" element={<EditEvent />} /> 
                <Route path="/edit-profile" element={<EditProfile />} /> 
                <Route path="/event-details/:id" element={<EventDetails />} /> 
                <Route path="/event-registration" element={<EventRegistration />} /> 
                <Route path="/sign-in" element={<SignIn />} />
            </Routes> 
        </Router>
    );
}

export default App;

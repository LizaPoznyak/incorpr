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
                <Route path="/staff/:id" element={<Profile />} /> 
                <Route path="/staff" element={<Staff />} /> 
                <Route path="/events" element={<Events />} /> 
                <Route path="/events/add" element={<AddEvent />} /> 
                <Route path="/events/:id/edit" element={<EditEvent />} /> 
                <Route path="/staff/:id/edit" element={<EditProfile />} /> 
                <Route path="/events/:id" element={<EventDetails />} /> 
                <Route path="/events/:id/users" element={<EventRegistration />} /> 
                <Route path="/api/sign-in" element={<SignIn />} />
            </Routes> 
        </Router>
    );
}

export default App;

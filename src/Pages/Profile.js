import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactShow from '../components/ContactShow.js';

function Profile() {

    return (
        <div> PROFILE PAGE
            <Link to="/contacts">Go Back</Link>
            <ContactShow contact={contact} />
        </div>
)}

export default Profile;
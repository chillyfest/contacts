import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import ContactList from '../components/ContactList.js'
import ContactCreate from '../components/ContactCreate.js'


function Contacts() {
    const [contacts, setContacts] = useState([]);

    const createContact = async ({name, email, phone, image}) => {
        const updatedContacts = [
            ...contacts,
            {
                id:Math.round(Math.random() * 10000),
                name,
                email,
                phone,
                image
            },
        ];
        setContacts(updatedContacts);
    }

    const deleteContactById = (id) => {
        const updatedContacts = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(updatedContacts);
    }
    
    return (
        <div className="Contacts">
            <ContactCreate onSubmit={createContact} />
            <ContactList onDelete={deleteContactById} contacts={contacts} />
            <Outlet />
        </div>
    );
}

export default Contacts;
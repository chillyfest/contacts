import ContactShow from './ContactShow.js';

function ContactList({contacts, onDelete}) {
    const renderedContacts = contacts.map((contact) => {
        return <ContactShow onDelete={onDelete} key={contact.id} contact={contact} />
    });

    return <div>{renderedContacts}</div>
}

export default ContactList;
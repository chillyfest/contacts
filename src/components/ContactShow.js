import { Link } from 'react-router-dom';

function ContactShow({ contact, onDelete }) {
    const handleDelete = () => {
        return onDelete(contact.id);
    }

    return (
        <div>
            <Link to={`/contacts/${contact.id}`}>
            <img
                alt="contact-picture"
                src={contact.image} />
            </Link>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ContactShow;
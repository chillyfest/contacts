import { useState } from 'react';

function ContactCreate({onSubmit}) {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState ([]);
    const [phone, setPhone] = useState ([]);
    const [image, setImage] = useState ([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, email, phone, image});
        setName('');
        setEmail('');
        setPhone('');
        setImage('');
    }

    return (
        <div className="contact-create"> 
            <h3>Add a Contact</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email</label>
                <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Phone Number</label>
                <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label>Image</label>
                <input className="input" value={image} onChange={(e) => setImage(e.target.value)} />
                <button className="button">Add</button>
            </form>
        </div>
)}

export default ContactCreate;
import {useState} from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        name,
        email,
        message
    };

    fetch('http://localhost:3001/messages', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Your message not yet sent');
        }

        return response.json();
    })
    

    .then(data => {
        alert('Message was sent successfully');
        setName('');
        setEmail('');
        setMessage('');
    })

    .catch(error => {
        console.error(error);
        alert('There is an issue send your message');
    });
};


return (
  <div className="container my-5">
    <h1 className="mb-4">Contact Us</h1>
    <p>Have any request or any comment send us a message</p>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
            type="text" 
            id="name" 
            className="form-control" 
            value={name}
            onChange={(e)=> setName(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>


        <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="5" value={message}
            onChange={(e) => {
                console.log(e.target.value);
                setMessage(e.target.value);}}
                ></textarea>
        </div>
         <button type="submit" className="btn btn-danger">Submit</button>

    </form>
    </div>
);

}

export default Contact;



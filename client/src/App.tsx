import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [message, setMessage] = useState('');
    const connectBackend = async () => {
        const response = await fetch('/api');
        console.log(response);
        const body = await response.text();
        console.log(response);
        console.log(body);

        if (response.status !== 200) {

            throw new Error('Api response was unsuccessful');
        }
        return body;
    }
    useEffect(() => {
        connectBackend()
            .then(res => setMessage(res))
            .catch(err => console.log(err));
    }, [])
    return (
        <div className="App">
            <h1>Visiw Application</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;

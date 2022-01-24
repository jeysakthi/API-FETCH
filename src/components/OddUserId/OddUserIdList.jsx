import React from 'react';
import CardItem from '../CardItem/CardItem';
import { useEffect, useState } from 'react';

const eventHandleEven = () => {
    window.location.href = "Even"
}

const Odd = () => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHandler = async () => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((data) => setUsers(data))
                .then(() => setLoading(false))
                .catch((err) => console.log(err));
        };
        fetchHandler();
    }, []);
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>I'm Odd</h3>
            <h3>API Fetch</h3>
            <button type="button" className="btn btn-dark" onClick={eventHandleEven}>Even UserId</button>
            <br/><br/>
            <div className='top-Margin'>
                <div className='container' >
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                {!loading && users.map((user) => (
                <CardItem 
                    id={user.id}
                    title={user.title}
                    body={user.body}
                    >
                </CardItem>
                ))}
                    </div>
                </div>
            </div>


        </div>


    )
}
export default Odd;
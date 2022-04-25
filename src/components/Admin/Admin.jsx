import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Admin() {

    const [results, setResults] = useState([]);
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in admin useEffect');
        fetchFeedback();
    }, [])

    const fetchFeedback = () => {
        console.log('in fetchFeedback');
        axios({
            method: 'GET',
            url: '/feedback',
        }).then(response => {
            console.log('response.data: ', response.data);
            setResults(response.data)
        }).catch(error => {
            console.log('error in GET', error);
        })
    }

    return(
        <>
            <h1>Admin</h1>
        </>
    )
}

export default Admin;
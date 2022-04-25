import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Admin() {

    const [results, setResults] = useState([]);

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
            setResults(response.data);
            console.log('results: ', results);
        }).catch(error => {
            console.log('error in GET', error);
        })
    }

    return(
        
        <>
            <h1>Admin</h1>
            {/* <p>{JSON.stringify(results)}</p> */}
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(each => (
                    <tr key={each.id}>
                        <td>{each.feeling}</td>
                        <td>{each.understanding}</td>
                        <td>{each.support}</td>
                        <td>{each.comments}</td>
                        <td><button>Delete</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}

export default Admin;
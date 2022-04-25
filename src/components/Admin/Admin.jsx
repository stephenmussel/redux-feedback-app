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

    const deleteFeedback = (id) => {
        // console.log('clicked delete');
        
        if(confirm('Are you sure you want to delete this?')) {
            axios({
                method: 'DELETE',
                url: `feedback/${id}`,
            }).then(response => {
                console.log('response: ', response);
                fetchFeedback();
            }).catch(error => {
                console.log('error in DELETE', error);
            });
        }      
    }

    const flagFeedback = (event) => {
        console.log('flagged feedback');

        
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
                        <th>Flagged</th>
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
                        <td>
                            <input 
                                type="checkbox"
                                checked={each.flagged}
                                value={each.id}
                                onChange={(event) => flagFeedback(event)}
                            ></input>
                        </td>
                        <td><button onClick={() => deleteFeedback(each.id)}>Delete</button></td>
                    </tr>
                    ))}   
                </tbody>
            </table>
        </>
    )
}

export default Admin;
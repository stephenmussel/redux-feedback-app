import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function Admin() {

    const [results, setResults] = useState([]);

    // retrieves all feedback on page load
    useEffect(() => {
        console.log('in admin useEffect');
        fetchFeedback();
    }, [])

    // retrieves all feedback
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
        
        if(confirm('Are you sure you want to delete this?')) { // prompts to confirm deletion
            axios({
                method: 'DELETE',
                url: `/feedback/${id}`, // captures ID of feedback to delete
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

        axios({
            method: 'PUT',
            url: `/feedback/${event.target.value}`, // captured ID of feedback flagged
            data: {flagged: event.target.checked}, // updating feedback to flag
        }).then(response => {
            console.log('flagged feedback', response);
            fetchFeedback();
        }).catch(error => {
            console.log(error);
            alert('error in flagging feedback');
        });
    }

    return(
        
        <>
            <h1>Admin</h1>
            {/* <p>{JSON.stringify(results)}</p> */}
            <div className="admin-container">
                <TableContainer className="admin-table-container" component={Paper}>
                    <Table sx={{ midWidth: 750 }} aria-label="feedback-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Feeling</TableCell>
                                <TableCell>Understanding</TableCell>
                                <TableCell>Support</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Flagged</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results.map(each => (
                            <TableRow key={each.id}>
                                <TableCell>{each.date.substr(0, 10)}</TableCell>
                                <TableCell>{each.feeling}</TableCell>
                                <TableCell>{each.understanding}</TableCell>
                                <TableCell>{each.support}</TableCell>
                                <TableCell>{each.comments}</TableCell>
                                <TableCell>
                                    <Checkbox 
                                        checked={each.flagged}
                                        value={each.id}
                                        onChange={(event) => flagFeedback(event)}
                                    ></Checkbox>
                                </TableCell>
                                <TableCell><Button variant="contained" onClick={() => deleteFeedback(each.id)}>Delete</Button></TableCell>
                            </TableRow>
                            ))}   
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Admin;
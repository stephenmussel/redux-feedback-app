import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
                url: `/feedback/${id}`,
            }).then(response => {
                console.log('response: ', response);
                fetchFeedback();
            }).catch(error => {
                console.log('error in DELETE', error);
            });
        }      
    }

    const flagFeedback = (id) => {
        console.log('flagged feedback');

        axios({
            method: 'PUT',
            url: `/feedback/${id}`,
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
                    <Table sx={{ midWidth: 650 }} aria-label="feedback-table">
                        <TableHead>
                            <TableRow>
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
                            <TableRow 
                                key={each.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0}} }
                            >
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
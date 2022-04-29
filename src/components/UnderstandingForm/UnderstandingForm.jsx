import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function UnderstandingForm() {

    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in understanding useEffect');
        entryCheck();
    }, []);

    const entryCheck = () => {
        feedback.understanding && setUnderstanding(feedback.understanding);
    }

    const feedbackObject = {
        understanding: understanding,
    }

    const handleUnderstandSubmit = (event) => {
        event.preventDefault();
        
        console.log('in handleUnderstandSubmit');
        console.log('understanding: ', understanding);
        console.log('feedbackObject: ', feedbackObject);

        if(understanding === "" || understanding < 1 || understanding > 5) {
            alert('Please enter a number between 1 and 5.')
        } else {
            const action = {type: 'ADD_UNDERSTANDING', payload: feedbackObject}
            dispatch(action);
            setUnderstanding('');
            nextSupported();   
        };  
    };

    const nextSupported = () => {
        history.push('/support');
    }

    const goBack = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_UNDERSTANDING', payload: feedbackObject}
        dispatch(action);
        history.push('/');
    }

    return(
        <>
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}} >
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleUnderstandSubmit}>
                <input
                    type="number"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setUnderstanding(event.target.value)}
                    value={understanding}
                />
                <Button sx={{ml: 1, mr: 1}} variant="contained" onClick={goBack} color="secondary">Back</Button>
                <Button variant="contained" type="submit">Next</Button>
            </form>
        </Paper>
        </>
    )
}

export default UnderstandingForm;
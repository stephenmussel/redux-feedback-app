import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

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

        const action = {type: 'ADD_UNDERSTANDING', payload: feedbackObject}
        dispatch(action);
        setUnderstanding('');
        nextSupported();   
    }

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
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleUnderstandSubmit}>
                <input
                    required
                    type="number"
                    min="1"
                    max="5"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setUnderstanding(event.target.value)}
                    value={understanding}
                />
                {/* <input
                    type="submit"
                    value="Next"
                    style={{margin: 5}}
                /> */}
                <Button sx={{ml: 1, mr: 1}} variant="contained" type="submit">Next</Button>
                <Button variant="contained" onClick={goBack}>Back</Button>
            </form>
        </>
    )
}

export default UnderstandingForm;
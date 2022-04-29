import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function FeelingForm() {

    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in feeling useEffect');
        entryCheck();
    }, [])

    // for displaying and editing previous entry. checks to see if there was previous entry and sets the variable to that value
    const entryCheck = () => {
        feedback.feeling && setFeeling(feedback.feeling);
    }

    const feedbackObject = {
        feeling: feeling,
    }

    const handleFeelingSubmit = (event) => {
        event.preventDefault();
        
        console.log('in handleFeelingSubmit');
        console.log('feeling: ', feeling);
        console.log('feedbackObject: ', feedbackObject);

        if(feeling === "" || feeling < 1 || feeling > 5) {
            alert('Please enter a number between 1 and 5.')
        } else {
            const action = {type: 'ADD_FEELING', payload: feedbackObject}
            dispatch(action);
            setFeeling('');
            nextUnderstanding();
        };
    };

    const nextUnderstanding = () => {
        history.push('/understanding');
    }

    return(
        <>
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}}>
            <h1>How are you feeling?</h1>
            <form onSubmit={handleFeelingSubmit}>
                <input
                    type="number"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setFeeling(event.target.value)}
                    value={feeling}
                />
                <Button sx={{ml: 1, mr: 1}} variant="contained" type="submit" className="button-container">Next</Button>
            </form>
        </Paper>
        </>
    )
}

export default FeelingForm;
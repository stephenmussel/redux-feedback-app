import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function SupportForm() {

    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in support useEffect');
        entryCheck();
    }, []);

    const entryCheck = () => {
        feedback.support && setSupport(feedback.support);
    };

    const feedbackObject = {
        support: support,
    }

    const handleSupportSubmit = (event) => {
        event.preventDefault();

        console.log('in handleSupportSubmit');
        console.log('support: ', support);
        console.log('feedbackObject: ', feedbackObject);

        if(support === "" || support < 1 || support > 5) {
            alert('Please enter a number between 1 and 5.')
        } else {
            const action = {type: 'ADD_SUPPORT', payload: feedbackObject};
            dispatch(action);
            setSupport('');
            nextComments();
        };
    };

    const nextComments = () => {
        history.push('/comments');
    }

    const goBack = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_SUPPORT', payload: feedbackObject};
        dispatch(action);
        history.push('/understanding');
    }
    
    return(
        <>
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}}>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSupportSubmit}>
                <input 
                    type="number"
                    placeholder="1-5"
                    style={{width: 50}}
                    onChange={event => setSupport(event.target.value)}
                    value={support}
                />
                <Button sx={{ml:1, mr: 1}} variant="contained" onClick={goBack} color="secondary">Back</Button>
                <Button variant="contained" type="submit">Next</Button>
            </form>
        </Paper>
        </>
    )
}

export default SupportForm;
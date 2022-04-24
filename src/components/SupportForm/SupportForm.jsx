import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function SupportForm() {

    const [support, setSupport] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in support useEffect');
        entryCheck();
    }), [];

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

        const action = {type: 'ADD_SUPPORT', payload: feedbackObject};
        dispatch(action);
        setSupport('');
        nextComments();
    }

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
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSupportSubmit}>
                <input 
                    required
                    type="number"
                    min="1"
                    max="5"
                    placeholder="1-5"
                    style={{width: 50}}
                    onChange={event => setSupport(event.target.value)}
                    value={support}
                />
                {/* <input 
                    type="submit"
                    value="Next"
                    style={{margin: 5}}
                /> */}
                <Button sx={{ml:1, mr: 1}} variant="contained" type="submit">Next</Button>
                <Button variant="contained" onClick={goBack}>Back</Button>
            </form>
        </>
    )
}

export default SupportForm;
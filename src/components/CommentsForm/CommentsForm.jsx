import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function CommentsForm() {

    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedbackReducer);

    useEffect(() => {
        console.log('in comments useEffect');
        entryCheck();
    }, []);

    const entryCheck = () => {
        feedback.comments && setComments(feedback.comments)
    }

    const feedbackObject = {
        comments: comments,
    }

    const handleCommentsSubmit = (event) => {
        event.preventDefault();

        console.log('in handleCommentsSubmit');
        console.log('comments: ', comments);
        console.log('feedbackObject: ', feedbackObject);

        const action = {type: 'ADD_COMMENTS', payload: feedbackObject};
        dispatch(action);
        setComments('');
        nextReview();
    }

    const nextReview = () => {
        history.push('/review');
    }

    const goBack = (event) => {
        event.preventDefault();
        const action = {type: 'ADD_COMMENTS', payload: feedbackObject};
        dispatch(action);
        history.push('/support')
    }

    return(
        <>
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}}>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleCommentsSubmit}>
                <textarea
                    rows={10}
                    cols={50}
                    onChange={event => setComments(event.target.value)}
                    value={comments}
                 /><br /><br />
                <Button variant="contained" onClick={goBack} color="secondary">Back</Button>
                <Button sx={{ml: 1, mr: 1}} variant="contained" type="submit">Next</Button>
            </form>
        </Paper>
        </>
    )
}

export default CommentsForm;
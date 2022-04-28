import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        console.log('in handleReviewSubmit');

        // POSTs feedback to DB then redirects to success page
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then(response => {
            console.log('feedback: ', feedback);
            history.push('/thankyou');
        })
    }

    const goBack = (event) => {
        event.preventDefault();
        history.push('/comments')
    }

    return(
        <>
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}}>
            <h1>Let's review your feedback: </h1>
            {/* <p>{JSON.stringify(feedback)}</p> */}

            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <div>
                <Button variant="contained" onClick={goBack} color="secondary">Back</Button>
                <Button sx={{ml: 1, mr: 1}} variant="contained" onClick={handleReviewSubmit} color="success">Submit</Button>
            </div>
        </Paper>
        </>
    )
}

export default ReviewFeedback;
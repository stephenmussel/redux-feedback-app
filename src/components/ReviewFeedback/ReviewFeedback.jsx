import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    // TODO POST to DB: add client POST request then add server side route and router
    // TODO Submission success page w/button to take new survey and clears data in store
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

    return(
        <>
            <h1>Let's review your feedback: </h1>
            {/* <p>{JSON.stringify(feedback)}</p> */}

            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button onClick={handleReviewSubmit}>Submit</button>
        </>
    )
}

export default ReviewFeedback;
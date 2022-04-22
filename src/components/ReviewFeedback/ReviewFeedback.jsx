import { useSelector } from 'react-redux';
import axios from 'axios';

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedbackReducer);

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        console.log('in handleReviewSubmit');
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
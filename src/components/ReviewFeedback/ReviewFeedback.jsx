import { useSelector } from 'react-redux';

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedbackReducer);

    return(
        <>
            <h1>Let's review your feedback: </h1>
            {/* <p>{JSON.stringify(feedback)}</p> */}

            <p>Feeling: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button>Submit</button>
        </>
    )
}

export default ReviewFeedback;
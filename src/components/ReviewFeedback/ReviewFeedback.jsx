import { useSelector } from 'react-redux';

function ReviewFeedback() {

    const feedback = useSelector(store => store.feedbackReducer);

    return(
        <>
            <h1>Let's review your feedback: </h1>
            <p>{JSON.stringify(feedback)}</p>
        </>
    )
}

export default ReviewFeedback;
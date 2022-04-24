import { useDispatch } from 'react-redux';


function ThankYou() {

    const dispatch = useDispatch();

    const handleNewFeedback = (event) => {
        event.preventDefault();

        console.log('in handleNewFeedback');
        dispatch({
            type: 'CLEAR_ALL'
        });

    }
    return(
        <>
            <h1>Thank you!</h1>
            <button onClick={handleNewFeedback}>Leave new feedback!</button>
        </>        
    )
}

export default ThankYou;
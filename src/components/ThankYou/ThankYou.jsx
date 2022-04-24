import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function ThankYou() {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNewFeedback = (event) => {
        event.preventDefault();

        console.log('in handleNewFeedback');
        dispatch({
            type: 'CLEAR_ALL'
        });
        leaveNewFeedback();
    }

    const leaveNewFeedback = () => {
        history.push('/');
    }

    return(
        <>
            <h1>Thank you!</h1>
            <Button variant="contained" onClick={handleNewFeedback}>Leave new feedback!</Button>
        </>        
    )
}

export default ThankYou;
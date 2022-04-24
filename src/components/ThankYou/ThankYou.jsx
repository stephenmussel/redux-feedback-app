import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


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
        <Paper variant="elevation" className="feedback-container" sx={{width: 750}}>
            <h1>Thank you!</h1>
            <div>
                <Button variant="contained" onClick={handleNewFeedback}>Leave new feedback!</Button>
            </div>
        </Paper>
        </>        
    )
}

export default ThankYou;
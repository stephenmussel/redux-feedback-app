import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeelingForm() {

    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const feedbackObject = {
        feeling: feeling,
    }

    const handleFeelingSubmit = (event) => {
        console.log('in handleFeelingSubmit');
        console.log('feeling: ', feeling);
        event.preventDefault();
        console.log('feedbackObject: ', feedbackObject);

        const action = {type: 'ADD_FEELING', payload: feedbackObject}
        dispatch(action);
        setFeeling('');
        nextUnderstanding();
    }

    const nextUnderstanding = () => {
        history.push('/understanding');
    }

    return(
        <>
            <h1>How are you feeling?</h1>
            <form onSubmit={handleFeelingSubmit}>
                <input
                    required
                    type="number"
                    min="1"
                    max="5"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setFeeling(event.target.value)}
                    value={feeling}
                />
                <input 
                    type="submit" 
                    value="Next" 
                    style={{margin: 5}}
                />
            </form>
        </>
    )
}

export default FeelingForm;
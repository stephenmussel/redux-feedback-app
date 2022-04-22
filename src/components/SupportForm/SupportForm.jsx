import { useState } from 'react';
import { useDispatch } from 'react-redux';

function SupportForm() {

    const [support, setSupport] = useState('');
    const dispatch = useDispatch();

    const feedbackObject = {
        support: support,
    }

    const handleSupportSubmit = (event) => {
        event.preventDefault();

        console.log('in handleSupportSubmit');
        console.log('support: ', support);
        console.log('feedbackObject: ', feedbackObject);

        const action = {type: 'ADD_SUPPORT', payload: feedbackObject};
        dispatch(action);
        setSupport('');
    }

    return(
        <>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleSupportSubmit}>
                <input 
                    required
                    type="number"
                    min="1"
                    max="5"
                    placeholder="1-5"
                    style={{width: 50}}
                    onChange={event => setSupport(event.target.value)}
                    value={support}
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

export default SupportForm;
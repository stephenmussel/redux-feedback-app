import { useState } from 'react';

function UnderstandingForm() {

    const [understanding, setUnderstanding] = useState('');

    const feedbackObject = {
        understanding: understanding,
    }

    const handleUnderstandSubmit = (event) => {
        event.preventDefault();
        
        console.log('in handleUnderstandSubmit');
        console.log('understanding: ', understanding);
        console.log('feedbackObject: ', feedbackObject);
        
    }

    return(
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleUnderstandSubmit}>
                <input
                    type="number"
                    min="1"
                    max="5"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setUnderstanding(event.target.value)}
                    value={understanding}
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

export default UnderstandingForm;
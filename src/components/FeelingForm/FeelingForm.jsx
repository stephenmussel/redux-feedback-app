import { useState } from 'react';

function FeelingForm() {

    const [feeling, setFeeling] = useState('');

    const handleFeelingSubmit = () => {
        console.log('in handleFeelingSubmit');
        console.log(feeling);
    }

    return(
        <>
            <h1>How are you feeling?</h1>
            <form onSubmit={handleFeelingSubmit}>
                <input
                    type="number"
                    min="1"
                    max="5"
                    style={{width: 50}}
                    placeholder="1-5"
                    onChange={event => setFeeling(event.target.value)}
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
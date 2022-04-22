import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CommentsForm() {

    const [comments, setComments] = useState('');
    const dispatch = useDispatch();

    const feedbackObject = {
        comments: comments,
    }

    const handleCommentsSubmit = (event) => {
        event.preventDefault();

        console.log('in handleCommentsSubmit');
        console.log('comments: ', comments);
        console.log('feedbackObject: ', feedbackObject);

        const action = {type: 'ADD_COMMENTS', payload: feedbackObject};
        dispatch(action);
        setComments('');
    }

    return(
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleCommentsSubmit}>
                <textarea
                    required
                    rows={10}
                    cols={50}
                    onChange={event => setComments(event.target.value)}
                    value={comments}
                 /><br />
                <input 
                    type="submit"
                    value="Next"
                    style={{margin: 5}}
                />
            </form>
        </>
    )
}

export default CommentsForm;
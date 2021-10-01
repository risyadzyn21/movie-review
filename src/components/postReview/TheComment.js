import React,{ useState } from "react";
import styles from './postReview.module.css';
import TextField from '@mui/material/TextField';
import { Button } from "react-bootstrap";
import SendIcon from '@mui/icons-material/Send';

function AddComment() {
    const [comment,setComment] = useState([])

    const AddComments = (e) => {
        setComment(e.target.value)
        return
    }
    return (
        <div>
            <form onSubmit={AddComments}>
            <input label="leave a review" placeholder="leave a review" />
                    {/* <Button
                        variant="contained"
                        size="normal"
                        type="submit"
                        onClick={AddComments}
                    >
                        <SendIcon />
                    </Button> */}
            </form>
        </div>
    )
}
 
export default AddComment;
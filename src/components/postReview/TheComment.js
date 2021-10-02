import React,{ useState } from "react";


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
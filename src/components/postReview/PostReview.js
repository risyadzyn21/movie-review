import React from "react";
import CommentBox from "./CommentBox";
import styles from './postReview.module.css';
import StarRatingDisplay from "./StarRatingInputDisplay";
import AddComment from "./TheComment";


function PostReview() {
  
    return (
        <div className={styles.reviewPage}>
            <div className={styles.inputTextReview}>
                <CommentBox />
                <div className={styles.commentInput__starRating}>
                    <StarRatingDisplay />
                </div>
                <div className={styles.commentInput__wrapper}>
                    <AddComment />
                </div>
        </div>
        </div>
    )
}

export default PostReview;
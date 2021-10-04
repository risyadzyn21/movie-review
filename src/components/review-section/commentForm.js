import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import styles from "./ReviewSection.module.css";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import axios from "axios";

const TodoForm = ({ saveTodo,addComment }) => {
  const { value, reset, onChange } = useInputState();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlkIjoyMiwiaWF0IjoxNjMyOTMzOTg0LCJleHAiOjE2MzI5Mzc1ODR9.Ky-FIrNLbh50HpmaSLRZgK1hymRrkfwjr6wIqoUcm3U";
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTRlNjgzOWUzZjJhNmY4NTk5YTZhZTciLCJpYXQiOjE1ODIxOTY3OTN9.M1g9J-OnZ0t83xiIvlaDFYX--JwA5IFWQlNzk5wzjIY"
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlkIjoyMiwiaWF0IjoxNjMyOTMzOTg0LCJleHAiOjE2MzI5Mzc1ODR9.Ky-FIrNLbh50HpmaSLRZgK1hymRrkfwjr6wIqoUcm3U";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addComment({rating,comment:value})

    // axios({
    //   method:"post",
    //   url:"https://movieapp-glints.herokuapp.com/api/v1/reviews/3",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json"
    //   },
    //   data: {
    //     rating,
    //     comment: value
    //   },
    // });
    
  };
  // (event) => {
  //   event.preventDefault();

  //   saveTodo(value);
  //   reset();
  // }(event) => {
  //   event.preventDefault();

  //   saveTodo(value);
  //   reset();
  // }
  return (
    <form
      onSubmit={handleSubmitForm}
    >
      <div className={styles.ratingStar}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <form
            // onSubmit={event => {
            //   event.preventDefault();

            //   saveRating(rating);
            //   reset();
            // }}
            >
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className={styles.star}
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            </form>
          );
        })}
      </div>

      <TextField
        className={styles.textField}
        variant="outlined"
        placeholder="Leave a review (enter for submit)"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;

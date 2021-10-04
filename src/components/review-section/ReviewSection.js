import React from "react";
import Typography from "@material-ui/core/Typography";

import TodoList from "./CommentList";
import useTodoState from "./useCommentState";
import styles from "./ReviewSection.module.css";

const ReviewSection = ({ movieId }) => {
  const { todos, addTodo } = useTodoState([]);

  return (
      // <div></div>
    <div className={styles.app}>
      <div className={styles.reviewTitle}>
        <Typography variant="h6" component="h5">
          Reviews
        </Typography>
      </div>

      <TodoList todos={todos} />

      {/* <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      /> */}
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Apps />, rootElement);

export default ReviewSection;

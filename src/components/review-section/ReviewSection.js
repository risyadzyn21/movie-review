import React from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from './CommentForm'
import TodoList from "./CommentList";
import useTodoState from "./useCommentState";
import styles from "./ReviewSection.module.css";

const ReviewSection = ({ movieId }) => {
  const { todos, addTodo } = useTodoState([]);

  const addComment = (value) => {
    console.log("kesini")
    // let newArr = todos.concat(value)
    addTodo(value)
  }

  return (
    // <div></div>
    <div className={styles.app}>
      <div className={styles.reviewTitle}>
        <Typography variant="h6" component="h5">
          Reviews
        </Typography>
      </div>

      <TodoList todos={todos} />

      <TodoForm
        addComment={addComment}
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Apps />, rootElement);

export default ReviewSection;

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@mui/material/Avatar';
import styles from './ReviewSection.module.css';
import { FaStar } from "@react-icons/all-files/fa/FaStar";

const TodoList = ({ todos }) => (
  <List>
    {todos.map((todo,ratingValue, index) => (
      <ListItem key={index.toString()} dense button>
        <div className={styles.avatarReview}>
        <Avatar src="/broken-image.jpg" />
        </div>
        <div className={styles.commentWrapper}>
          <p>Username</p>
          <div className={styles.ratingStarList}>
              <FaStar 
                className={styles.starList} 
                color={ratingValue === {ratingValue}? "#ffc107":"e4e5e9"}
                size={15} 
              />
        </div>
        <ListItemText primary={todo} />
        </div>
      </ListItem>
    ))}
  </List>
);

export default TodoList;

import * as React from 'react';
import {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import StarRating from './StarRatingInput';

function CommentBox() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[...Array(2)].map((star,i) => {
                return (
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Joko Corintthianz" //username
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                <StarRating />
                            </Typography>
                            This movie is very cool! Underrated!
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                );
            })}
      {/* <Divider variant="inset" component="li" />    */}
    </List>
    )
}

export default CommentBox;
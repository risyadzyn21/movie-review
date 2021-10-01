import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { arrComplete, arrInput } from '../../redux/actions';
import styles from './postReview.module.css';

function Comment(props) {

    const [input, setInput ] = useState([]);

    const getInputValue = (input) => {
        const value = input.target.value;
        setInput(value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        var checkArr = props.arr;
        if(input.length === 0 || checkArr.indexOf(input) !== -1) {
            alert('Please leave a review');
            document.querySelector('form').reset();
            return
        }

        console.log(checkArr.length)
        document.querySelector('form').reset();
        props.input({id: new Date(), text: input, done: false});
    }

    const listComplete = (param) => {
        props.complete(param)
        console.log('tes change')
    }

    useEffect(() => {
        console.log(props.arr)
    },[props.arr]);

    return(

        <div className={styles.commentContainer}>

                <div className={styles.divComment}>
    
                    <form className={styles.form} onSubmit={handleClick} >
                        <div className={styles.divInputComment}>
                            <input type="text" placeholder="Leave a review" className={styles.inputComment} onChange={getInputValue} /> 
                        </div>
                        <button type="submit" className={styles.textSimbol} >
                            Submit
                        </button>
                
                    </form>
                    
                </div>
    
                {/* mapping array todo */}
                {props.arr.map((comment,index) => 
                    <div   key={comment.id} className={styles.divComment}>
                            <div onClick={() => listComplete(comment.id)} className={styles.divInputComment}>
                                <p  style={{textDecoration: comment.done  ? 'line-through': 'none' }}   className={styles.textComment}>{comment.text}</p>
                            </div>
                    </div>
                    
                    )}
            
         
        
     </div>
      )
    }
    
    const mapStateToProps = (state) => ({
        arr: state.commentReducer.comment
      })
    
    const mapDispatchToProps = (dispatch) => ({
        input: (input) => {
            dispatch(arrInput(input))
        },
        // delete: (index) => {
        //     dispatch(arrDelete(index))
        // },
        complete: (param) => {
            dispatch(arrComplete(param))
        }
        
      });
  
    
      export default connect(mapStateToProps,mapDispatchToProps)(Comment);
    

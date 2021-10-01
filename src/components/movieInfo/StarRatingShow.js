import React,{ useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./StarRating.module.css";

const StarRatingShow = () => {
    const [rating] = useState(4);
    return (
        <div>
            {[...Array(5)].map((star,i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input 
                        type="radio" 
                        name="rating" 
                        value={ratingValue} 
                        // onClick={() =>setRating(ratingValue)}
                        />
                        <FaStar 
                        className={styles.star} 
                        color={ratingValue <= (rating) ? "#ffc107":"e4e5e9"}
                        size={30} 
                        />
                    </label>
                );
            })}
        </div>
    ) 

}

export default StarRatingShow;
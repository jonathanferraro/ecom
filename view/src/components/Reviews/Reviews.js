import React, { useEffect, useState } from 'react';
import './Reviews.css';

import { useSelector, useDispatch } from 'react-redux';
import { loadReviews } from '../../store/reviews/reviewsAPI';
import { selectReviews, selectReviewsStatus } from '../../store/reviews/reviewsSlice';

export function Reviews() {
    const dispatch = useDispatch();
    const reviews = useSelector(selectReviews);
    const reviewsStatus = useSelector(selectReviewsStatus);
    const [displayedReviews, setDisplayedReviews] = useState([]);

    const pickReviews = () => {
        const iterations = Math.floor(Math.random() * 5) + 3;
  
        const numReviews = Object.keys(reviews).length;
        console.log(numReviews)
        console.log('the pickReviews function ran');
      
  
      
        for (let i = 0; i < iterations; i++) {
          const randomIndex = Math.floor(Math.random() * (numReviews - 1)) + 1;
          console.log('randomIndex', randomIndex);
          const review = reviews[randomIndex];
          console.log('review item', review)
          setDisplayedReviews((prev) => [...prev, review]);
        }
      };


    useEffect(() => {
      dispatch(loadReviews());
    }, []);

    useEffect(() => {
      if (reviews && reviewsStatus === 'fulfilled') {
        setDisplayedReviews([]);
        pickReviews();
      };
    }, [reviewsStatus]);

    return (
        <div>
            {displayedReviews && 
            (<div className='reviews'>
              <h3>Reviews</h3>
              <div>
                {(displayedReviews) && (displayedReviews.map((review) => (
                  <div className='review-item'> 
                    <div>
                      <p>{review.review_number}</p><p>{review.name}</p>
                    </div>
                    <div>
                      <p>{review.review_content}</p>
                    </div>
                  </div>
                )))}
              </div>
            </div>)}

        </div>
    )
}
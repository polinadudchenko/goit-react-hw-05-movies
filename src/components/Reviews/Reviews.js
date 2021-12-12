import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { movieAPI } from '../../services/movie-api';
import {
  ReviewGallery,
  ReviewGalleryItem,
  AuthorName,
  ReviewContent,
  NoReviewsMessage,
} from './Reviews.styled';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI
      .movieReview(movieId)
      .then(res => {
        if (res.length !== 0) {
          setReviews(res.results);
        } else {
          throw new Error('Trese are no reviews for this movie');
        }
      })
      .catch(err => toast.error(err));
  }, [movieId]);
  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewGallery>
          {reviews.map(review => {
            return (
              <ReviewGalleryItem key={review.id}>
                <AuthorName>{review.author}</AuthorName>
                <ReviewContent>{review.content}</ReviewContent>
              </ReviewGalleryItem>
            );
          })}
        </ReviewGallery>
      ) : (
        <NoReviewsMessage>No reviews are found</NoReviewsMessage>
      )}
    </>
  );
}

import { useState, useEffect } from 'react';
import { movieAPI } from '../../services/movie-api';
import { mapCast } from '../../services/mapper';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useParams } from 'react-router';

import {
  CastGallery,
  CastGalleryItem,
  CastTitle,
  CastCharacter,
  NoCastMessage,
} from './Cast.styled';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    movieAPI
      .movieCast(movieId)
      .then(cast => {
        if (cast) {
          const castContent = mapCast(cast.cast);
          setCast(castContent);
        } else {
          throw new Error('There is no data about cast for this film');
        }
      })
      .catch(err => toast.error(err));
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <CastGallery>
          {cast.map(actor => {
            return (
              <CastGalleryItem key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w342/${actor.profile_path}`
                      : 'https://cdn.pixabay.com/photo/2017/02/01/00/26/cranium-2028555_960_720.png'
                  }
                  alt={actor.name}
                />
                <CastTitle>{actor.name}</CastTitle>
                <CastCharacter> as {actor.character}</CastCharacter>
              </CastGalleryItem>
            );
          })}
        </CastGallery>
      ) : (
        <NoCastMessage>No reviews are found</NoCastMessage>
      )}
      ;
    </>
  );
}

import { Link } from 'react-router-dom';
import '../../index.styled';
import {
  InfoThumb,
  GroupTitle,
  InfoList,
  InfoItem,
  InfoLink,
} from './MoreInfo.styled';

export default function MoreInfo() {
  return (
    <InfoThumb>
      <GroupTitle>Additional Information</GroupTitle>
      <InfoList>
        <InfoItem>
          <InfoLink to="cast">Cast</InfoLink>
        </InfoItem>
        <InfoItem>
          <Link to="reviews">Review</Link>
        </InfoItem>
      </InfoList>
    </InfoThumb>
  );
}

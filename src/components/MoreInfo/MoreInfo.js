import { Link } from 'react-router-dom';
import '../../index.styled';
import { InfoThumb, GroupTitle, InfoList, InfoItem } from './MoreInfo.styled';

export default function MoreInfo() {
  return (
    <InfoThumb>
      <GroupTitle>Additional Information</GroupTitle>
      <InfoList>
        <InfoItem>
          <Link to="cast">Cast</Link>
        </InfoItem>
        <InfoItem>
          <Link to="reviews">Review</Link>
        </InfoItem>
      </InfoList>
    </InfoThumb>
  );
}

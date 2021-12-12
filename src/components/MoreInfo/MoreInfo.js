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
          <InfoLink to="reviews">Review</InfoLink>
        </InfoItem>
      </InfoList>
    </InfoThumb>
  );
}

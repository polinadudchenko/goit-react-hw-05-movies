import styled from '@emotion/styled';

const CastGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
`;

const CastGalleryItem = styled.li`
  width: 140px;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 15px;
  overflow: hidden;
`;

const CastTitle = styled.h4``;
const CastCharacter = styled.p`
  font-weight: 400;
`;
export { CastGallery, CastGalleryItem, CastTitle, CastCharacter };

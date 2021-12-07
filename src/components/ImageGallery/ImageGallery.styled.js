import styled from '@emotion/styled';

const StyledGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
`;

const GalleryItem = styled.li`
  width: 280px;
  margin-left: 20px;
  margin-top: 20px;
  overflow: hidden;
`;
export { StyledGallery, GalleryItem };

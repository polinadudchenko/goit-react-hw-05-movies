import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

const GalleryLink = styled(Link)`
  color: #414141;
  text-align: left;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: #f19816;
  }
`;
export { StyledGallery, GalleryItem, GalleryLink };

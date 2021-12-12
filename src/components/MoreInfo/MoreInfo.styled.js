import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const InfoThumb = styled.div``;

const GroupTitle = styled.h3`
  margin-bottom: 10px;
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
`;

const InfoItem = styled.li`
  color: #414141;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const InfoLink = styled(Link)`
  color: #414141;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: #f19816;
  }
`;

export { InfoThumb, GroupTitle, InfoList, InfoItem, InfoLink };

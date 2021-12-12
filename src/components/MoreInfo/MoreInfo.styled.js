import styled from '@emotion/styled';

const InfoThumb = styled.div``;

const GroupTitle = styled.h3`
  margin-bottom: 10px;
`;

const InfoList = styled.ul`
  display: flex;
  justify-content: center;
`;

const InfoItem = styled.li`
  font-size: 55px;
  color: #414141;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export { InfoThumb, GroupTitle, InfoList, InfoItem };

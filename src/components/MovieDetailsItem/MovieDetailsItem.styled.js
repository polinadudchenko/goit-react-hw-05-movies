import styled from '@emotion/styled';

const MovieDetailsThumb = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageThumb = styled.div`
  margin-right: 50px;
  max-height: 400px;
  overflow: hidden;
`;

const MovieImage = styled.img`
  object-fit: contain;
`;

const ContentThumb = styled.div`
  text-align: left;
  width: 80%;
`;

const MovieTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`;

const GroupTitle = styled.h3`
  margin-bottom: 5px;
`;

const TextContent = styled.p`
  margin-bottom: 20px;
`;

export {
  MovieDetailsThumb,
  ImageThumb,
  ContentThumb,
  MovieImage,
  MovieTitle,
  GroupTitle,
  TextContent,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
`;

const CommunityName = styled.div`
  font-size: 14px;
  color: #888;
`;

const PostTitle = styled.h2`
  font-size: 18px;
  margin: 8px 0;
`;

const PostContent = styled.p`
  font-size: 16px;
  margin: 8px 0;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 8px;
  cursor: pointer;
`;

const ShareLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Post = ({ community, title, content, likes, comments }) => {
  return (
    <PostContainer>
      <CommunityName>{community}</CommunityName>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostFooter>
        <FooterLeft>
          <Icon>👍 {likes > 0 ? likes : 'No likes yet'}</Icon>
          <Icon>💬 {comments > 0 ? comments : 'No comments yet'}</Icon>
        </FooterLeft>
        <FooterRight>
          <ShareLink href={`https://example.com/share?title=${title}`}>Share</ShareLink>
        </FooterRight>
      </PostFooter>
    </PostContainer>
  );
};

Post.propTypes = {
  community: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
};

Post.defaultProps = {
  community: 'Unknown Community',
  title: 'Untitled Post',
  content: 'No content available.',
  likes: 0,
  comments: 0,
};

export default Post;

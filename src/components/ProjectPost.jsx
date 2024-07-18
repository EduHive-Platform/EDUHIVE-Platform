import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
  width: 200%
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

const CommentSection = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ccc;
`;

const Comment = styled.div`
  margin-bottom: 8px;
`;

const ProjectPost = ({ communityName, title, content, likes, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <PostContainer>
      <CommunityName>{communityName}</CommunityName>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <PostFooter>
        <FooterLeft>
          <Icon>👍 {likes > 0 ? likes : 'No likes yet'}</Icon>
          <Icon onClick={toggleComments}>💬 {comments.length > 0 ? comments.length : 'No comments yet'}</Icon>
        </FooterLeft>
        <FooterRight>
          <ShareLink href={`https://example.com/share?title=${title}`}>Share</ShareLink>
        </FooterRight>
      </PostFooter>
      {showComments && (
        <CommentSection>
          {comments.map((comment, index) => (
            <Comment key={index}>{comment}</Comment>
          ))}
        </CommentSection>
      )}
    </PostContainer>
  );
};

ProjectPost.propTypes = {
  communityName: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.string),
};

ProjectPost.defaultProps = {
  communityName: 'Unknown Community',
  title: 'Untitled Project',
  content: 'No content available.',
  likes: 0,
  comments: [],
};

export default ProjectPost;

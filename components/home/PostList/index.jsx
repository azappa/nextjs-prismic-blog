import React from 'react';
import PostItem from './PostItem';
import { PageWrapper } from 'style/page.styled';

/**
 * Post list component
 */
const PostList = ({ posts }) => {
  return (
    <PageWrapper>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </PageWrapper>
  );
};

export default PostList;

import React, { useEffect, useState } from 'react';
import ProjectPost from './ProjectPost';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 16px;
`;

const PostsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <PageContainer>
      <h1>Projects</h1>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        projects.map((project, index) => (
          <ProjectPost
            key={index}
            communityName={project.communityName}
            title={project.title}
            content={project.content}
            likes={project.likes || 0} // Ensure likes is a number
            comments={project.comments || []} // Ensure comments is an array
          />
        ))
      )}
    </PageContainer>
  );
};

export default PostsPage;

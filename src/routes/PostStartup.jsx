import React, { useState } from 'react';
import './PostStartup.css';
import HeaderMain from '../components/HeaderMain';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostStartup() {
  const navigate = useNavigate();
  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/postTypeSelect' },
    { label: 'Plaza', href: '/square' },
    { label: 'Dashboard', href: '/dashboard' },
  ];
  const rightLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
  ];


  const [formData, setFormData] = useState({
    title: "",
    community_id: "",
    description: "",
    credit: "",
    area: "",
    job_type: "",
    job_descriptions: "",
    num_employees: "",
    skills_or_requirements: "",
    institution: "",
    duration: "",
    other_info: "",
    signature: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault("formData is ", formData);
    console.log()
    try {
      const response = await axios.post('http://localhost:3000/save-startup', {
        email: '200@200.com', // Ensure this is dynamically set as per user session or form input
        project: formData
      });
      console.log('Project saved:', response.data);
      navigate('/success')
    } catch (error) {
      console.error('Failed to post startup:', error);
    }
  };

  return (
    <div className="App">
      <div className="post-startup">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        
        <main>
          <div className='post-header'>
            <h2>Post your startup, closer to your dream</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Title *
                <input type="text" name="title" placeholder="e.g. Eduhive is hiring" required value={formData.title} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Description
                <textarea name="description" placeholder="Eduhive is a full student run online projects matching platform, we need 5 to 10 students who are good at front-end, back-end, and UI design" value={formData.description} onChange={handleChange}></textarea>
              </label>
            </div>
            <div className="form-group">
              <label>
                Credit *
                <select name="credit" required value={formData.credit} onChange={handleChange}>
                  <option value="">select a type of credit</option>
                  <option value="salary">salary</option>
                  <option value="credit">credit</option>
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Community *
                <select name="community_id" required value={formData.community_id} onChange={handleChange}>
                  <option value="">select a type of community</option>
                  <option value="303">303</option>
                  <option value="302">302</option>
                </select>
              </label>
            </div>
            <div className="form-group employees-allocation">
              <label>
                Employees Allocation *
                <div className="job-type-container">
                  <input type="text" name="job_type" placeholder="Job Type" required value={formData.job_type} onChange={handleChange} />
                  <input type="text" name="job_descriptions" placeholder="Job Description (If needed)" value={formData.job_descriptions} onChange={handleChange} />
                  <input type="number" name="num_employees" placeholder="Number of Employees" required value={formData.num_employees} onChange={handleChange} />
                </div>
              </label>
            </div>
            <div className="form-group">
              <label>
                Requirement/Skills *
                <input type="text" name="skills_or_requirements" placeholder="Python, JavaScript" required value={formData.skills_or_requirements} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Institution Range *
                <input type="text" name="institution" required value={formData.institution} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Duration
                <input type="text" name="duration" placeholder="2024-2027" value={formData.duration} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <label>
                Other Info
                <textarea name="other_info" placeholder="More info will be more helpful" value={formData.other_info} onChange={handleChange}></textarea>
              </label>
            </div>
            <div className="form-group">
              <label>
                Signature *
                <input type="text" name="signature" placeholder="FULL NAME" required value={formData.signature} onChange={handleChange} />
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn-post">Post</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PostStartup;

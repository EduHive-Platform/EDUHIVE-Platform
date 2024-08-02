import React, { useState } from 'react';
import './PostLongResearch.css';
import HeaderMain from '../components/HeaderMain';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostLongResearch() {
  const navigate = useNavigate();
  const leftLinks = [
    { label: 'Profile', href: '/solutions' },
    { label: 'Post', href: '/postTypeSelect' },
    { label: 'Plaza', href: '/square' },
    { label: 'Dashboard', href: '/contact' },
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
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post('http://localhost:3000/save-long-research', {
        email: '200@200.com', // Ensure this is dynamically set as per user session or form input
        project: formData
      });
      console.log('Research opportunity posted successfully:', response.data);
      navigate('/success');
    } catch (error) {
      console.error('Failed to post research opportunity:', error);
      alert('Failed to post research opportunity. Please try again!');
    }
  };

  return (
    <div className="App">
      <div className="post-long-research">
        <HeaderMain leftLinks={leftLinks} rightLinks={rightLinks} />
        <main>
          <h2>Post Long Research Opportunity</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Title *
              <input type="text" name="title" placeholder="e.g. Long-term research" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
              Description *
              <textarea name="description" placeholder="Provide a detailed description of the research" value={formData.description} onChange={handleChange} required></textarea>
            </label>
            <label>
              Area *
              <input type="text" name="area" placeholder="Location of the research" value={formData.area} onChange={handleChange} required />
            </label>
            <div className="form-group">
              <label>
                Community *
                <select name="community_id" required value={formData.community_id} onChange={handleChange}>
                  <option value="">Select a community type</option>
                  <option value="303">303</option>
                  <option value="302">302</option>
                </select>
              </label>
            </div>
            <label>
              Credit *
              <select name="credit" value={formData.credit} onChange={handleChange} required>
                <option value="">Select Credit Type</option>
                <option value="course">Course Credit</option>
                <option value="volunteer">Volunteer Hours</option>
                <option value="salary">Salary</option>
                {/* Add other options here */}
              </select>
            </label>
            <div className="employees-allocation">
              <label>
                Employees Allocation *
                <div className="job-type-container">
                  <input type="text" name="job_type" placeholder="Job Type" value={formData.job_type} onChange={handleChange} required />
                  <input type="text" name="job_descriptions" placeholder="Job Description (If needed)" value={formData.job_descriptions} onChange={handleChange} />
                  <input type="number" name="num_employees" placeholder="Number of Employees" value={formData.num_employees} onChange={handleChange} required />
                </div>
              </label>
            </div>
            <label>
              Requirement/Skills *
              <input type="text" name="skills_or_requirements" placeholder="e.g. Python, JavaScript" value={formData.skills_or_requirements} onChange={handleChange} required />
            </label>
            <label>
              Institution *
              <input type="text" name="institution" placeholder="e.g. University/College" value={formData.institution} onChange={handleChange} required />
            </label>
            <label>
              Duration *
              <input type="text" name="duration" placeholder="e.g. Six Months" value={formData.duration} onChange={handleChange} required />
            </label>
            <label>
              Other Info
              <textarea name="other_info" placeholder="Additional information" value={formData.other_info} onChange={handleChange}></textarea>
            </label>
            <label>
              Signature *
              <input type="text" name="signature" placeholder="Full Name" value={formData.signature} onChange={handleChange} required />
            </label>
            <button type="submit">Post</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default PostLongResearch;

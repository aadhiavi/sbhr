import React from 'react';
import './SBHRCompo.css';
import Footer from '../../Components/Footer/Footer';
import { SbhrFooter } from '../../Files/Store/Store';

const JobList = [
  { title: 'Marketing Coordinator', description: 'Assist in the development of marketing campaigns.' },
  { title: 'Social Media Manager', description: 'Manage social media accounts and content.' },
  { title: 'Content Writer', description: 'Create engaging written content for various platforms.' },
  { title: 'Digital Marketing Specialist', description: 'Develop and implement online marketing strategies.' },
];

const Career = () => {
  return (
    <div className="career-card">
      <div className='career'>
        <h1>SBHR job portal</h1>
        <p>We have multiple openings! Check out our positions below:</p>
        <div className='job-list'>
          {JobList.map((job, index) => (
            <div className='job-card' key={index}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
        <a className='apply-button' href="https://forms.gle/mxuYgN8zLs24R14i8">Apply Now</a>
      </div>
      <Footer {...SbhrFooter} />
    </div>
  );
};

export default Career;

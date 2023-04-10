import React from 'react';
import Title from '../Title/Title';
import JobCategories from '../JobCategories/JobCategories';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const Homepage = () => {
    return (
        <div className='mx-auto px-5'>
         <Title></Title>
         <JobCategories></JobCategories>
         <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Homepage;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = () => {
    const allFeaturedJobs = useLoaderData();
    const fourFeatures = allFeaturedJobs.slice(0 , 4);
    return (
        <div className='my-5'>
         <h1 className='text-center text-gray-950 text-4xl font-bold'>Featured Jobs</h1>
        <p className='text-center text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
           <div className=''>
           {allFeaturedJobs.map(featuredJob => <SingleFeaturedJob key={featuredJob.id} featuredJob={featuredJob}></SingleFeaturedJob>)}
           </div>
        </div>
    );
};

export default FeaturedJobs;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleFeaturedJob from '../SingleFeaturedJob/SingleFeaturedJob';

const FeaturedJobs = () => {
    const allFeaturedJobs = useLoaderData();
    const fourFeatures = allFeaturedJobs.slice(0 , 4);
    return (
        <div className='my-5'>
         <h1 className='text-center text-gray-950 text-4xl font-bold'>Featured Jobs</h1>
        <p className='text-center text-gray-500 my-5'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-[80%] mx-auto my-3 p-5'>
           {fourFeatures.map(featuredJob => <SingleFeaturedJob key={featuredJob.id} featuredJob={featuredJob}></SingleFeaturedJob>)}
           </div>
           <Link className='flex'>
            <button className='mx-auto bg-gradient-to-r from-violet-400 to-indigo-400 text-white p-3 rounded w-[35%] md:w-[10%]'>See All Jobs</button>
           </Link>
        </div>
    );
};

export default FeaturedJobs;
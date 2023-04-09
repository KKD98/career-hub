import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {
    const [jobCategories , setJobCategories] = useState([]);
    useEffect(()=>{
        fetch('job-category.json')
        .then(res => res.json())
        .then(data => setJobCategories(data))
    } , [])
    return (
        <div className='flex flex-col gap-5 md:flex-row justify-between w-[75%] mx-auto my-10'>
            {jobCategories.map(jobCategory => <JobCategory key={jobCategory.jobId} jobCategory={jobCategory}></JobCategory>)}
        </div>
    );
};

export default JobCategories;
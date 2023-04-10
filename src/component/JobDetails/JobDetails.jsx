import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import JobDetailsPart1 from '../JobDetailsPart1/JobDetailsPart1';
import JobDetailsPart2 from '../JobDetailsPart2/JobDetailsPart2';

const JobDetails = () => {
    const foundJob = useLoaderData();
    console.log(foundJob);

     const [allJobDetails , setAllJobDetails] = useState([])
    console.log(allJobDetails)

    useEffect(() => {

        fetch('/public/featured-jobs.json')
            .then(res => res.json())
            .then(data => setAllJobDetails(data))
    }, []);

    const singleJobDetails = allJobDetails?.find(jobDetail => {return jobDetail.id == foundJob.jobId})
    console.log('Found' , singleJobDetails)


    return (
        <div className='flex flex-col md:flex-row'>
           {/* <JobDetailsPart1 singleJobDetails={singleJobDetails}></JobDetailsPart1>
          <JobDetailsPart2 singleJobDetails={singleJobDetails}></JobDetailsPart2> */}
        </div>
    );
};

export default JobDetails;
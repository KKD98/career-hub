import React from 'react';

const SingleFeaturedJob = ({featuredJob}) => {
    console.log(featuredJob)
    return (
        <div>
            <img src={featuredJob.company_logo} alt="" />
            <p>{featuredJob.job_title}</p>
            <p>{featuredJob.company_name}</p>
            <div>
                <button>{featuredJob.remote_or_onsite}</button>
                <button>{featuredJob.fulltime_or_parttime}</button>
            </div>
            <div>
                <p>{featuredJob.location}</p>
                <p>{featuredJob.salary}</p>
            </div>
            <button>View Details</button>
        </div>
    );
};

export default SingleFeaturedJob;
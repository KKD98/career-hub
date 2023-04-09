import React from 'react';
import Title from '../Title/Title';
import JobCategories from '../JobCategories/JobCategories';


const Homepage = () => {
    return (
        <div className='mx-auto px-5'>
         <Title></Title>
         <JobCategories></JobCategories>
        </div>
    );
};

export default Homepage;